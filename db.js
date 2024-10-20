const mongoose = require('mongoose');
require('dotenv').config();

// Define MongoDB connection url
// const mongoURL = 'mongodb://localhost:27017/hotels'
// const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

// set up MongoDB connection
mongoose.connect(mongoURL)

// get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection

// Define event listenersfor database connection
db.on('connected', ()=>{
    console.log('Connected to MongoDB server');
});

db.on('error',(err)=>{
    console.log('MongoDB connection error');
});

db.on('disconnected', ()=>{
    console.log('MongoDBdisconnected');
});

// export the database connection
module.exports = db;