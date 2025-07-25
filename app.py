from flask import Flask, send_from_directory
import os

# Create Flask app
app = Flask(__name__, static_folder='client/build', static_url_path='')

# Serve React build index.html on root
@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

# Serve any static assets (CSS, JS, images, etc.)
@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory(app.static_folder, path)

# Fallback route
@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
