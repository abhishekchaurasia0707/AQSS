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

### Backend (Render.com - Free Alternative to Heroku)

1. **Prepare Backend**
   - Update `backend/.env.production` with your actual credentials
   - Set up MongoDB Atlas database
   - Generate new Gmail App Password

2. **Deploy to Render**
   - Go to [render.com](https://render.com)
   - Click "New" → "Web Service"
   - Connect to your GitHub repository
   - Settings:
     - Name: `aqss-backend`
     - Root Directory: `backend`
     - Runtime: `Node`
     - Build Command: `npm install`
     - Start Command: `node server.js`
     - Environment Variables: Copy from `.env.production`

## 📋 Pre-Deployment Checklist

### ✅ Frontend
- [ ] Update `frontend/.env.production` with backend URL
- [ ] Test build locally: `npm run build`
- [ ] Check all API calls use environment variables

### ✅ Backend
- [ ] Set up MongoDB Atlas database
- [ ] Update `MONGODB_URI` in `.env.production`
- [ ] Configure email service with production credentials
- [ ] Generate secure JWT_SECRET
- [ ] Test all API endpoints

### ✅ Both
- [ ] Push all changes to GitHub
- [ ] Test contact form functionality
- [ ] Verify email notifications work

## 🔗 Post-Deployment

1. **Update URLs**
   - Replace `your-backend-url.onrender.com` with actual Render URL
   - Replace `your-frontend-url.netlify.app` with actual Netlify URL
   - Update CORS settings in backend

2. **Test Everything**
   - Contact form submission
   - Email delivery
   - Database connectivity
   - All page routes

## 🛠️ Troubleshooting

### Common Issues:
1. **CORS Errors**: Update `FRONTEND_URL` in backend environment
2. **Database Connection**: Check MongoDB Atlas whitelist
3. **Email Failures**: Verify Gmail App Password and 2FA
4. **Build Errors**: Check Node.js version compatibility

### Environment Variables:
- Frontend: `VITE_API_URL`
- Backend: `NODE_ENV`, `PORT`, `MONGODB_URI`, `EMAIL_*`

## 📊 Monitoring

- **Netlify**: Built-in analytics and form handling
- **Render**: Built-in monitoring and logs
- **MongoDB Atlas**: Database performance metrics
- **Gmail**: Email delivery status

## 🔄 CI/CD

Both platforms support automatic deployments:
- Push to main branch → Auto-deploy
- Pull requests → Preview deployments
- Environment-specific configurations
