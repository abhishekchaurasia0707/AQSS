import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import contactRoutes from './routes/contact.js';
import { errorHandler } from './middleware/errorHandler.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

// Middleware
const rawFrontendOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(',').map(url => url.trim()).filter(Boolean)
  : [];
const defaultOrigins = ['http://localhost:3000', 'http://localhost:5173'];
const allowedOrigins = [...new Set([...rawFrontendOrigins, ...defaultOrigins])];
const vercelOriginPattern = /^https:\/\/.*\.vercel\.app$/;
console.log('Allowed CORS origins:', allowedOrigins);
app.use(helmet());
app.use(limiter);
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin, like server-to-server calls or some native clients.
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin) || vercelOriginPattern.test(origin)) return callback(null, true);
    return callback(new Error(`CORS policy: origin ${origin} is not allowed`), false);
  },
  credentials: true,
}));
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'AQSS API is running',
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
