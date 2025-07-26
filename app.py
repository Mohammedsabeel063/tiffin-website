from flask import Flask, send_from_directory, make_response
from whitenoise import WhiteNoise
import os
import time

app = Flask(__name__, static_folder='dist', static_url_path='')

# Serve static files with WhiteNoise
app.wsgi_app = WhiteNoise(app.wsgi_app, root='dist', prefix='')
app.wsgi_app.add_files('dist/assets', prefix='assets/')

# Cache busting timestamp
BUILD_TIME = int(time.time())

# Debug: Show files on server (optional)
def debug_files():
    static_folder = app.static_folder
    print(f"Static folder: {static_folder}")
    print(f"Static folder exists: {os.path.exists(static_folder)}")

    if os.path.exists(static_folder):
        print(f"Files in static folder: {os.listdir(static_folder)}")
        index_path = os.path.join(static_folder, 'index.html')
        print(f"index.html exists: {os.path.exists(index_path)}")

    print(f"Working directory: {os.getcwd()}")
    print(f"Files in root: {os.listdir('.')}")
    print(f"dist/index.html exists: {os.path.exists('dist/index.html')}")

# Utility: Find index.html
def find_index_html():
    for path in [
        'dist/index.html',
        'index.html',
        'static/index.html',
        'build/index.html'
    ]:
        if os.path.exists(path):
            print(f"✅ Found index.html at: {path}")
            return path
    print("❌ index.html not found in any location!")
    return None

# Route: Root serves index.html
@app.route('/')
def serve_index():
    index_path = find_index_html()
    if not index_path:
        return "index.html not found", 500

    try:
        directory, filename = os.path.split(index_path)
        response = make_response(send_from_directory(directory, filename))
        response.headers.update({
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
        })
        return response
    except Exception as e:
        print(f"Error serving index.html: {e}")
        return f"Error: {e}", 500

# Route: Static fallback (SPA support for React Router)
@app.errorhandler(404)
def not_found(e):
    index_path = find_index_html()
    if not index_path:
        return "Page not found", 404

    try:
        directory, filename = os.path.split(index_path)
        return send_from_directory(directory, filename)
    except Exception as e2:
        print(f"404 fallback error: {e2}")
        return "Page not found", 404

# Render needs this to avoid shutdown
if __name__ != '__main__':
    application = app

# Local development
if __name__ == '__main__':
    debug_files()
    app.run(debug=False, host='0.0.0.0', port=10000)
