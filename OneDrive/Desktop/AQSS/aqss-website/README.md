# AQSS Website - Advance Quality Service and Solution

A modern, production-ready full-stack website for AQSS (Advance Quality Service and Solution) built with React, Node.js, and MongoDB.

## 🚀 Features

- **Frontend**: React.js with Vite, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js, MongoDB
- **Responsive Design**: Mobile-first approach with dark/light mode
- **Contact Form**: MongoDB integration with email notifications
- **WhatsApp Integration**: Click-to-chat functionality
- **Modern UI/UX**: Glassmorphism, animations, smooth transitions
- **SEO Optimized**: Meta tags, clean URLs, fast loading

## 📁 Project Structure

```
aqss-website/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── utils/           # Utility functions
│   │   └── assets/          # Static assets
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Node.js backend
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   ├── middleware/          # Express middleware
│   ├── utils/               # Backend utilities
│   ├── package.json
│   └── server.js
└── docs/                     # Documentation
```

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Nodemailer** - Email service
- **Joi** - Validation
- **Helmet** - Security
- **Morgan** - Logging

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud)
- Git

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd aqss-website
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your configuration
```

#### Environment Variables (.env)

```env
# Server Configuration
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/aqss

# Email Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=aqssolution11@gmail.com

# WhatsApp Configuration
WHATSAPP_PHONE=918796905471

# Security
JWT_SECRET=your-super-secret-jwt-key-here
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

#### Start Backend

```bash
# Development
npm run dev

# Production
npm start
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/api/health

## 📧 Email Setup (Gmail)

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password
3. Use the app password in the `EMAIL_PASS` environment variable

## 🗄️ MongoDB Setup

### Local MongoDB

```bash
# Install MongoDB
# Windows: Download from mongodb.com
# Mac: brew install mongodb-community
# Linux: sudo apt-get install mongodb

# Start MongoDB
mongod

# Create database (automatically created on first connection)
```

### MongoDB Atlas (Cloud)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Get connection string
4. Update `MONGODB_URI` in .env file

## 🚀 Deployment

### Frontend (Netlify/Vercel)

#### Netlify
1. Push code to GitHub
2. Connect Netlify to GitHub repository
3. Set build command: `cd frontend && npm run build`
4. Set publish directory: `frontend/dist`
5. Add environment variables

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow prompts

### Backend (Render/Railway)

#### Render
1. Push code to GitHub
2. Connect Render to GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables

#### Railway
1. Install Railway CLI: `npm install -g @railway/cli`
2. Login: `railway login`
3. Deploy: `railway up`

## 📱 API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)
- `GET /api/contact/stats` - Get contact statistics
- `PUT /api/contact/:id` - Update contact status
- `DELETE /api/contact/:id` - Delete contact

### Health Check
- `GET /api/health` - Server health status

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
      secondary: { /* your colors */ },
    }
  }
}
```

### Fonts
Google Fonts are used (Poppins & Inter). Update in `index.css`.

### Content
Update content in respective page components:
- `src/pages/Home.jsx` - Homepage content
- `src/pages/About.jsx` - About page
- `src/pages/Services.jsx` - Services
- `src/pages/Contact.jsx` - Contact info

## 🔧 Development

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

### Adding New API Endpoints
1. Create route file in `backend/routes/`
2. Add model in `backend/models/` if needed
3. Register route in `backend/server.js`

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check MongoDB is running
   - Verify connection string in .env
   - Check network/firewall settings

2. **Email Not Sending**
   - Verify Gmail app password
   - Check email settings in .env
   - Ensure less secure apps allowed if using 2FA

3. **Build Errors**
   - Clear node_modules and reinstall
   - Check Node.js version compatibility
   - Verify all dependencies installed

4. **CORS Issues**
   - Check FRONTEND_URL in backend .env
   - Verify CORS configuration

## 📞 Support

For support and questions:
- Email: aqssolution11@gmail.com
- Phone: +91 87969 05471

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

---

Built with ❤️ for AQSS - Advance Quality Service and Solution
