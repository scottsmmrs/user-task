require('dotenv').config();

// Environment credentials

module.exports = { 
    NODE_ENV : process.env.NODE_ENV,
    MONGO_URI : process.env.MONGO_URI
};