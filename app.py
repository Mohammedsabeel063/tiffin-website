from flask import Flask, send_from_directory, make_response, request
import os
import time

# Create Flask app
app = Flask(__name__, static_folder='dist', static_url_path='')

# Get current timestamp for cache busting
BUILD_TIME = int(time.time())

# Debug function to check what files exist
def debug_files():
    static_folder = app.static_folder
    print(f"Static folder: {static_folder}")
    print(f"Static folder exists: {os.path.exists(static_folder)}")
    if os.path.exists(static_folder):
        print(f"Files in static folder: {os.listdir(static_folder)}")
        index_path = os.path.join(static_folder, 'index.html')
        print(f"index.html exists: {os.path.exists(index_path)}")

# Serve React build index.html on root
@app.route('/')
def serve():
    debug_files()  # Debug what files exist
    try:
        response = make_response(send_from_directory(app.static_folder, 'index.html'))
        response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
        response.headers['Pragma'] = 'no-cache'
        response.headers['Expires'] = '0'
        return response
    except Exception as e:
        print(f"Error serving index.html: {e}")
        # Fallback: try to serve from root directory
        try:
            return send_from_directory('.', 'index.html')
        except Exception as e2:
            print(f"Fallback error: {e2}")
            return f"Error: {e}", 500

# Serve any static assets (CSS, JS, images, etc.)
@app.route('/<path:path>')
def static_proxy(path):
    try:
        response = make_response(send_from_directory(app.static_folder, path))
        if path.endswith(('.css', '.js')):
            response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
            response.headers['Pragma'] = 'no-cache'
            response.headers['Expires'] = '0'
        return response
    except Exception as e:
        print(f"Error serving {path}: {e}")
        # Try to serve from root directory as fallback
        try:
            return send_from_directory('.', path)
        except Exception as e2:
            print(f"Fallback error for {path}: {e2}")
            return f"File not found: {path}", 404

# Fallback route
@app.errorhandler(404)
def not_found(e):
    try:
        return send_from_directory(app.static_folder, 'index.html')
    except Exception as e2:
        print(f"404 handler error: {e2}")
        try:
            return send_from_directory('.', 'index.html')
        except Exception as e3:
            print(f"404 fallback error: {e3}")
            return "Page not found", 404

if __name__ == '__main__':
    debug_files()  # Debug on startup
    app.run(debug=True)
