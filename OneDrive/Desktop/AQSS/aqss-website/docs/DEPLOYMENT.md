# Deployment Guide for AQSS Website

This guide covers deploying the AQSS website to production environments.

## 🚀 Frontend Deployment

### Option 1: Netlify (Recommended)

1. **Prepare for Production**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Netlify**
   - Push code to GitHub
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `cd frontend && npm run build`
     - Publish directory: `frontend/dist`
   - Add environment variables:
     - `VITE_API_URL`: Your backend URL

3. **Custom Domain** (Optional)
   - Go to Site settings → Domain management
   - Add your custom domain

### Option 2: Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd frontend
   vercel --prod
   ```

3. **Environment Variables**
   ```bash
   vercel env add VITE_API_URL production
   ```

### Option 3: Traditional Hosting

1. **Build the Application**
   ```bash
   cd frontend
   npm run build
   ```

2. **Upload Files**
   - Upload the `dist` folder to your hosting provider
   - Ensure your hosting supports single-page applications

## 🗄️ Backend Deployment

### Option 1: Railway (Recommended)

1. **Prepare for Production**
   ```bash
   cd backend
   npm install --production
   ```

2. **Deploy to Railway**
   - Push code to GitHub
   - Go to [Railway](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Connect your GitHub repository
   - Build settings:
     - Root Directory: `aqss-website/backend`
     - Build Command: `bash start.sh`
     - Start Command: `bash start.sh`
   - Add environment variables from `.env.example`

### Option 2: VPS/Dedicated Server

1. **Server Setup**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2
   sudo npm install -g pm2
   ```

2. **Deploy Application**
   ```bash
   # Clone repository
   git clone <your-repo-url>
   cd aqss-website/backend
   
   # Install dependencies
   npm install --production
   
   # Create ecosystem file
   nano ecosystem.config.js
   ```

3. **PM2 Configuration** (`ecosystem.config.js`)
   ```javascript
   module.exports = {
     apps: [{
       name: 'aqss-backend',
       script: 'server.js',
       instances: 'max',
       exec_mode: 'cluster',
       env: {
         NODE_ENV: 'production',
         PORT: 5000
       },
       env_production: {
         NODE_ENV: 'production',
         PORT: 5000,
         EMAIL_USER: 'your-email@gmail.com',
         EMAIL_PASS: 'your-app-password'
       }
     }]
   };
   ```

4. **Start with PM2**
   ```bash
   pm2 start ecosystem.config.js --env production
   pm2 save
   pm2 startup
   ```

## 📧 Email Configuration

### Gmail Setup

1. **Enable 2-Factor Authentication**
   - Go to Google Account settings
   - Security → 2-Step Verification

2. **Generate App Password**
   - Go to App passwords
   - Select "Mail" and your device
   - Copy the generated password

3. **Update Environment Variables**
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   ```

### Alternative Email Providers

**SendGrid**
```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASS=your-sendgrid-api-key
```

**Amazon SES**
```env
EMAIL_HOST=email-smtp.us-east-1.amazonaws.com
EMAIL_PORT=587
EMAIL_USER=your-aws-access-key
EMAIL_PASS=your-aws-secret-key
```

##  SSL/HTTPS Configuration

### Netlify/Vercel
- SSL is automatically handled

### Custom Server (Nginx + Let's Encrypt)

1. **Install Nginx**
   ```bash
   sudo apt install nginx
   ```

2. **Install Certbot**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

3. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
       
       location /api {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

4. **Get SSL Certificate**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

## 📊 Monitoring and Logging

### Application Monitoring

**Uptime Monitoring**
- Use UptimeRobot or Pingdom
- Monitor both frontend and backend endpoints

**Error Tracking**
- Sentry for error tracking
- LogRocket for session replay

**Performance Monitoring**
- Google Analytics for frontend
- Application Performance Monitoring (APM) for backend

### Log Management

**Production Logs**
```bash
# PM2 logs
pm2 logs

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

## 🔄 CI/CD Pipeline

### GitHub Actions

1. **Create Workflow File** (`.github/workflows/deploy.yml`)
   ```yaml
   name: Deploy to Production
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy-frontend:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: cd frontend && npm ci
         - run: cd frontend && npm run build
         - uses: netlify/actions/cli@master
           with:
             args: deploy --dir=frontend/dist --prod
           env:
             NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
             NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
   
     deploy-backend:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: cd backend && npm ci
         - uses: appleboy/ssh-action@master
           with:
             host: ${{ secrets.HOST }}
             username: ${{ secrets.USERNAME }}
             key: ${{ secrets.SSH_KEY }}
             script: |
               cd /path/to/app
               git pull origin main
               npm install --production
               pm2 restart aqss-backend
   ```

## 🧪 Testing Before Deployment

### Pre-deployment Checklist

1. **Frontend Tests**
   ```bash
   cd frontend
   npm run build
   # Check for build errors
   npm run preview
   ```

2. **Backend Tests**
   ```bash
   cd backend
   npm test
   # Check API endpoints
   curl http://localhost:5000/api/health
   ```

3. **Integration Tests**
   - Test contact form submission
   - Verify email sending
   - Check WhatsApp integration
   - Test video call feature

4. **Performance Tests**
   - Lighthouse audit
   - Page speed test
   - Mobile responsiveness

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   - Clear node_modules and reinstall
   - Check Node.js version compatibility
   - Verify all environment variables

2. **Email Not Sending**
   - Verify email credentials
   - Check SMTP settings
   - Ensure 2FA is enabled on Gmail account

3. **CORS Issues**
   - Update FRONTEND_URL in backend
   - Verify CORS configuration

4. **SSL Certificate Issues**
   - Check domain DNS settings
   - Renew expired certificates
   - Verify Nginx configuration

## 📞 Support

For deployment support:
- Email: aqssolution11@gmail.com
- Phone: +91 87969 05471

---

Remember to always test thoroughly in a staging environment before deploying to production!
