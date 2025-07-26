#!/bin/bash

echo "Starting build process..."

# Install Node.js dependencies
echo "Installing Node.js dependencies..."
npm install

# Build React app
echo "Building React app..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "ERROR: dist directory not found after build!"
    exit 1
fi

echo "Build files created:"
ls -la dist/

# Check if index.html exists
if [ ! -f "dist/index.html" ]; then
    echo "ERROR: index.html not found in dist directory!"
    exit 1
fi

echo "index.html found in dist directory"

# Copy assets to root for fallback
echo "Copying assets to root directory for fallback..."
cp -r dist/assets ./
cp dist/index.html ./index.html

echo "Assets copied to root directory"

# Install Python dependencies
echo "Installing Python dependencies..."
pip install -r requirements.txt

echo "Build completed successfully!"
echo "Files in dist directory:"
ls -la dist/
echo "Files in root directory:"
ls -la ./ 