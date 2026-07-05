@echo off
echo 🚀 Starting AQSS Website Deployment...

REM Build frontend
echo 📦 Building frontend...
cd frontend
call npm run build
echo ✅ Frontend build complete

REM Check if dist folder exists
if exist "dist" (
    echo ✅ Frontend build files ready
) else (
    echo ❌ Frontend build failed
    pause
    exit /b 1
)

REM Install backend dependencies
echo 📦 Installing backend dependencies...
cd ..\backend
call npm install
echo ✅ Backend dependencies installed

echo.
echo 🎉 Deployment ready!
echo.
echo Next steps:
echo 1. Push to GitHub: git push origin main
echo 2. Deploy frontend to Netlify
echo 3. Deploy backend to Render.com
echo.
echo Don't forget to:
echo - Update environment variables
echo - Set up MongoDB Atlas
echo - Configure email service
pause
