from flask import Flask, send_from_directory, make_response, request
from whitenoise import WhiteNoise
import os
import time

app = Flask(__name__, static_folder='dist', static_url_path='')

# Use WhiteNoise to serve static files efficiently
app.wsgi_app = WhiteNoise(app.wsgi_app, root='dist')
app.wsgi_app.add_files('dist/assets', prefix='assets/')

# Cache busting timestamp
BUILD_TIME = int(time.time())

# Debug file listings
def debug_files():
    static_folder = app.static_folder
    print(f"Static folder: {static_folder}")
    print(f"Static folder exists: {os.path.exists(static_folder)}")
    if os.path.exists(static_folder):
        print(f"Files in static folder: {os.listdir(static_folder)}")
        index_path = os.path.join(static_folder, 'index.html')
        print(f"index.html exists: {os.path.exists(index_path)}")

    print(f"Current working directory: {os.getcwd()}")
    print(f"Files in root: {os.listdir('.')}")
    print(f"dist/index.html exists: {os.path.exists('dist/index.html')}")

# Try to locate index.html
def find_index_html():
    possible_paths = [
        'dist/index.html',
        'index.html',
        'static/index.html',
        'build/index.html'
    ]
    for path in possible_paths:
        if os.path.exists(path):
            print(f"Found index.html at: {path}")
            return path
    print("index.html not found in any location!")
    return None

# Serve index.html for root
@app.route('/')
def serve():
    debug_files()
    index_path = find_index_html()
    if not index_path:
        return "index.html not found", 500

    try:
        directory, filename = os.path.split(index_path)
        response = make_response(send_from_directory(directory, filename))
        response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
        response.headers['Pragma'] = 'no-cache'
        response.headers['Expires'] = '0'
        return response
    except Exception as e:
        print(f"Error serving index.html: {e}")
        return f"Error: {e}", 500

# Catch-all route for frontend SPA
@app.errorhandler(404)
def not_found(e):
    index_path = find_index_html()
    if not index_path:
        return "Page not found", 404

    try:
        directory, filename = os.path.split(index_path)
        return send_from_directory(directory, filename)
    except Exception as e2:
        print(f"404 handler error: {e2}")
        return "Page not found", 404

# Run locally
if __name__ == '__main__':
    debug_files()
    app.run(debug=True)
