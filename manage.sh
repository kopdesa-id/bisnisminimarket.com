#!/bin/bash

# Build script untuk Netlify deployment
# Memastikan dependencies terinstall dengan benar

echo "🔧 Starting build process..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies with npm..."
    npm ci --production=false
else
    echo "✅ Dependencies already installed"
fi

# Check if vite is available
if ! command -v npx vite &> /dev/null; then
    echo "❌ Vite not found, installing dependencies..."
    npm ci --production=false
fi

# Run the build
echo "🏗️ Building project..."
npm run build

echo "✅ Build completed successfully!"