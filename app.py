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
    
    # Check root directory
    print(f"Current working directory: {os.getcwd()}")
    print(f"Files in root: {os.listdir('.')}")
    print(f"index.html in root exists: {os.path.exists('index.html')}")

# Function to find index.html in multiple locations
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

# Serve React build index.html on root
@app.route('/')
def serve():
    debug_files()  # Debug what files exist
    
    index_path = find_index_html()
    if not index_path:
        return "index.html not found", 500
    
    try:
        # Determine directory and filename
        if '/' in index_path:
            directory, filename = index_path.rsplit('/', 1)
        else:
            directory = '.'
            filename = index_path
        
        response = make_response(send_from_directory(directory, filename))
        response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
        response.headers['Pragma'] = 'no-cache'
        response.headers['Expires'] = '0'
        return response
    except Exception as e:
        print(f"Error serving index.html: {e}")
        return f"Error: {e}", 500

# Serve any static assets (CSS, JS, images, etc.)
@app.route('/<path:path>')
def static_proxy(path):
    # Try multiple possible locations
    possible_dirs = ['dist', '.', 'static', 'build']
    
    for directory in possible_dirs:
        try:
            response = make_response(send_from_directory(directory, path))
            if path.endswith(('.css', '.js')):
                response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
                response.headers['Pragma'] = 'no-cache'
                response.headers['Expires'] = '0'
            return response
        except Exception as e:
            print(f"Failed to serve {path} from {directory}: {e}")
            continue
    
    print(f"File not found: {path}")
    return f"File not found: {path}", 404

# Fallback route
@app.errorhandler(404)
def not_found(e):
    index_path = find_index_html()
    if not index_path:
        return "Page not found", 404
    
    try:
        if '/' in index_path:
            directory, filename = index_path.rsplit('/', 1)
        else:
            directory = '.'
            filename = index_path
        
        return send_from_directory(directory, filename)
    except Exception as e2:
        print(f"404 handler error: {e2}")
        return "Page not found", 404

if __name__ == '__main__':
    debug_files()  # Debug on startup
    app.run(debug=True)
