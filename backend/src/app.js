const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');

const app = express();

// Middleware
app.use(helmet({
    contentSecurityPolicy: false,
}));

// CORS Configuration
const allowedOrigins = [
    process.env.FRONTEND_URL,
    'https://ambikalawgroup.com',
    'https://www.ambikalawgroup.com',
    'http://localhost:5173',
    'http://localhost:5174'
];

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            return callback(new Error('CORS Policy Error'), false);
        }
        return callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Pre-flight requests
app.options('*', cors());

// --- API ROUTES ---
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// Health check for deployment
app.get('/api/health', (req, res) => {
    res.status(200).send('API is running...');
});

// --- FRONTEND SERVING ---
if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(__dirname, '../../frontend/dist');
    
    // Serve static files from the frontend build
    app.use(express.static(distPath));

    // For any request that doesn't match an API route, serve index.html
    app.get('*', (req, res) => {
        // If the request starts with /api but didn't match any routes above, return 404
        if (req.url.startsWith('/api')) {
            return res.status(404).json({ message: 'API Route Not Found' });
        }
        res.sendFile(path.resolve(distPath, 'index.html'));
    });
} else {
    // Basic root route for development
    app.get('/', (req, res) => {
        res.send('API is running in development mode...');
    });
}

// Error Handling Middleware (must be after all routes)
app.use(notFound);
app.use(errorHandler);

module.exports = app;
