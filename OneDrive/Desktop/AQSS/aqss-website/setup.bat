@echo off
echo 🚀 Setting up AQSS Website...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Setup Backend
echo 📦 Setting up backend...
cd backend
if not exist .env (
    copy .env.example .env
    echo ✅ Created .env file. Please update it with your configuration.
)
call npm install
echo ✅ Backend dependencies installed.

REM Setup Frontend
echo 📦 Setting up frontend...
cd ..\frontend
call npm install
echo ✅ Frontend dependencies installed.

REM Go back to root
cd ..

echo.
echo 🎉 Setup complete!
echo.
echo 📋 Next steps:
echo 1. Update backend\.env with your configuration
echo 2. Start MongoDB (if using local)
echo 3. Run 'npm run dev' in both frontend\ and backend\ directories
echo.
echo 🌐 Application URLs:
echo    Frontend: http://localhost:3000
echo    Backend:  http://localhost:5000
echo.
echo 📚 For more information, see README.md
pause
