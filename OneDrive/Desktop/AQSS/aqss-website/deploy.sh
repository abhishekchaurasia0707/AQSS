#!/bin/bash

# AQSS Website Deployment Script

echo "🚀 Starting AQSS Website Deployment..."

# Build frontend
echo "📦 Building frontend..."
cd frontend
npm run build
echo "✅ Frontend build complete"

# Check if dist folder exists
if [ -d "dist" ]; then
    echo "✅ Frontend build files ready"
else
    echo "❌ Frontend build failed"
    exit 1
fi

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd ../backend
npm install
echo "✅ Backend dependencies installed"

echo "🎉 Deployment ready!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git push origin main"
echo "2. Deploy frontend to Netlify"
echo "3. Deploy backend to Render.com"
echo ""
echo "Don't forget to:"
echo "- Update environment variables"
echo "- Set up MongoDB Atlas"
echo "- Configure email service"
