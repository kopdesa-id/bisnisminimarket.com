#!/bin/bash

# Management script untuk project bisnisminimarket.com
# Menggunakan Bun sebagai package manager

COMMAND=$1

show_help() {
    echo "🚀 Bisnisminimarket.com Management Script"
    echo ""
    echo "Usage: ./manage.sh <command>"
    echo ""
    echo "Commands:"
    echo "  install    - Install dependencies dengan Bun"
    echo "  dev        - Start development server"
    echo "  build      - Build project untuk production"
    echo "  preview    - Preview build hasil"
    echo "  lint       - Run ESLint"
    echo "  clean      - Clean node_modules dan dist"
    echo "  deploy     - Build dan siap deploy ke Netlify"
    echo "  help       - Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./manage.sh install"
    echo "  ./manage.sh dev"
    echo "  ./manage.sh build"
}

install_deps() {
    echo "📦 Installing dependencies dengan Bun..."
    bun install
    echo "✅ Dependencies installed successfully!"
}

start_dev() {
    echo "🚀 Starting development server..."
    bun run dev
}

build_project() {
    echo "🏗️ Building project untuk production..."
    
    # Check if dependencies exist
    if [ ! -d "node_modules" ]; then
        echo "📦 Dependencies not found, installing..."
        bun install
    fi
    
    bun run build
    echo "✅ Build completed successfully!"
    
    # Show build info
    if [ -d "dist" ]; then
        echo ""
        echo "📊 Build output:"
        ls -la dist/
    fi
}

preview_build() {
    echo "👀 Starting preview server..."
    
    if [ ! -d "dist" ]; then
        echo "❌ Build not found, running build first..."
        build_project
    fi
    
    bun run preview
}

run_lint() {
    echo "🔍 Running ESLint..."
    bun run lint
}

clean_project() {
    echo "🧹 Cleaning project..."
    
    if [ -d "node_modules" ]; then
        echo "🗑️ Removing node_modules..."
        rm -rf node_modules
    fi
    
    if [ -d "dist" ]; then
        echo "🗑️ Removing dist..."
        rm -rf dist
    fi
    
    if [ -f "bun.lockb" ]; then
        echo "🗑️ Removing bun.lockb..."
        rm -f bun.lockb
    fi
    
    echo "✅ Project cleaned successfully!"
}

deploy_prep() {
    echo "🚀 Preparing for deployment..."
    
    # Clean first
    clean_project
    
    # Install dependencies
    install_deps
    
    # Run lint
    echo "🔍 Running lint check..."
    bun run lint
    
    # Build project
    build_project
    
    echo ""
    echo "✅ Project ready for deployment!"
    echo "📝 Next steps:"
    echo "   1. git add ."
    echo "   2. git commit -m 'Ready for deployment'"
    echo "   3. git push origin main"
    echo "   4. Deploy via Netlify dashboard"
}

# Main script logic
case $COMMAND in
    "install")
        install_deps
        ;;
    "dev")
        start_dev
        ;;
    "build")
        build_project
        ;;
    "preview")
        preview_build
        ;;
    "lint")
        run_lint
        ;;
    "clean")
        clean_project
        ;;
    "deploy")
        deploy_prep
        ;;
    "help"|"")
        show_help
        ;;
    *)
        echo "❌ Unknown command: $COMMAND"
        echo ""
        show_help
        exit 1
        ;;
esac