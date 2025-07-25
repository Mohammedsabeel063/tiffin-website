import os
import time
import mimetypes
from flask import Flask, send_from_directory, make_response
from whitenoise import WhiteNoise

# ✅ Ensure .mp4 has the correct MIME type
mimetypes.add_type("video/mp4", ".mp4")

app = Flask(__name__, static_folder='dist', static_url_path='')

# ✅ Serve static files with WhiteNoise (chunk-friendly + caching)
app.wsgi_app = WhiteNoise(app.wsgi_app, root='dist', prefix='', max_age=31536000)
app.wsgi_app.add_files('dist/assets', prefix='assets/')

# Cache busting timestamp (for reference only)
BUILD_TIME = int(time.time())

def debug_files():
    static_folder = app.static_folder
    print(f"Static folder: {static_folder}")
    print(f"Static folder exists: {os.path.exists(static_folder)}")
    if os.path.exists(static_folder):
        print(f"Files in static folder: {os.listdir(static_folder)}")
        print(f"index.html exists: {os.path.exists(os.path.join(static_folder, 'index.html'))}")
    print(f"Working directory: {os.getcwd()}")
    print(f"Files in root: {os.listdir('.')}")
    print(f"dist/index.html exists: {os.path.exists('dist/index.html')}")

def find_index_html():
    for path in ['dist/index.html', 'index.html', 'static/index.html', 'build/index.html']:
        if os.path.exists(path):
            print(f"✅ Found index.html at: {path}")
            return path
    print("❌ index.html not found in any location!")
    return None

@app.route('/')
def serve():
    debug_files()
    index_path = find_index_html()
    if not index_path:
        return "index.html not found", 500
    directory, filename = os.path.split(index_path)
    response = make_response(send_from_directory(directory, filename))
    response.headers.update({
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    })
    return response

@app.errorhandler(404)
def not_found(e):
    index_path = find_index_html()
    if not index_path:
        return "Page not found", 404
    directory, filename = os.path.split(index_path)
    return send_from_directory(directory, filename)

if __name__ == '__main__':
    debug_files()
    port = int(os.environ.get("PORT", 10000))
    print(f"Starting Flask on 0.0.0.0:{port} (PORT env var)")
    app.run(host="0.0.0.0", port=port)
