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

// Routes
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// Root route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Serve Frontend in Production
if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(__dirname, '../../frontend/dist');
    app.use(express.static(distPath));

    app.get('*', (req, res, next) => {
        // Skip API routes
        if (req.url.startsWith('/api')) {
            return next();
        }
        res.sendFile(path.resolve(distPath, 'index.html'));
    });
}

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;
