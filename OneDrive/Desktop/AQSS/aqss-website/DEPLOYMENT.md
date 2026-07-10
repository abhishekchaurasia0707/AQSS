# AQSS Website Deployment Guide

## 🚀 Deployment Strategy

### Frontend (Netlify)
1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to your GitHub repository
   - Select the `frontend` folder
   - Build settings:
     - Base directory: `frontend`
     - Build command: `npm run build`
     - Publish directory: `frontend/dist`

### Backend (Railway)

1. **Prepare Backend**
   - Update `backend/.env.production` with your actual credentials
   - Generate new Gmail App Password

2. **Deploy to Railway**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Connect to your GitHub repository
   - Settings:
     - Name: `aqss-backend`
     - Root Directory: `aqss-website/backend`
     - Build Command: `bash start.sh`
     - Start Command: `bash start.sh`
     - Environment Variables: Copy from `.env.production`

## 📋 Pre-Deployment Checklist

### ✅ Frontend
- [ ] Update `frontend/.env.production` with backend URL
- [ ] Test build locally: `npm run build`
- [ ] Check all API calls use environment variables

### ✅ Backend
- [ ] Configure email service with production credentials
- [ ] Test all API endpoints

### ✅ Both
- [ ] Push all changes to GitHub
- [ ] Test contact form functionality
- [ ] Verify email notifications work

## 🔗 Post-Deployment

1. **Update URLs**
   - Replace `your-backend-url.railway.app` with actual Railway URL
   - Replace `your-frontend-url.netlify.app` with actual Netlify URL
   - Update CORS settings in backend

2. **Test Everything**
   - Contact form submission
   - Email delivery
   - All page routes

## 🛠️ Troubleshooting

### Common Issues:
1. **CORS Errors**: Update `FRONTEND_URL` in backend environment
2. **Email Failures**: Verify Gmail App Password and 2FA
3. **Build Errors**: Check Node.js version compatibility

### Environment Variables:
- Frontend: `VITE_API_URL`
- Backend: `NODE_ENV`, `PORT`, `EMAIL_*`

## 📊 Monitoring

- **Netlify**: Built-in analytics and form handling
- **Railway**: Built-in monitoring and logs
- **Gmail**: Email delivery status

## 🔄 CI/CD

Both platforms support automatic deployments:
- Push to main branch → Auto-deploy
- Pull requests → Preview deployments
- Environment-specific configurations
