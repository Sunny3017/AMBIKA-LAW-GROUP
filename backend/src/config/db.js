const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        
        if (!uri) {
            console.error('❌ ERROR: MONGO_URI is missing in environment variables!');
            process.exit(1);
        }

        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        if (process.env.NODE_ENV !== 'production') {
            process.exit(1);
        }
    }
};

module.exports = connectDB;
