#!/bin/bash

# Install Node.js dependencies
echo "Installing Node.js dependencies..."
npm install

# Build React app
echo "Building React app..."
npm run build

# Install Python dependencies
echo "Installing Python dependencies..."
pip install -r requirements.txt

echo "Build completed successfully!" 