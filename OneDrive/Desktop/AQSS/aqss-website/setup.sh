#!/bin/bash

# AQSS Website Setup Script
echo "🚀 Setting up AQSS Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if MongoDB is installed
if ! command -v mongod &> /dev/null; then
    echo "⚠️  MongoDB is not installed. Please install MongoDB or use MongoDB Atlas."
fi

# Setup Backend
echo "📦 Setting up backend..."
cd backend
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ Created .env file. Please update it with your configuration."
fi
npm install
echo "✅ Backend dependencies installed."

# Setup Frontend
echo "📦 Setting up frontend..."
cd ../frontend
npm install
echo "✅ Frontend dependencies installed."

# Go back to root
cd ..

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Update backend/.env with your configuration"
echo "2. Start MongoDB (if using local)"
echo "3. Run 'npm run dev' in both frontend/ and backend/ directories"
echo ""
echo "🌐 Application URLs:"
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:5000"
echo ""
echo "📚 For more information, see README.md"
