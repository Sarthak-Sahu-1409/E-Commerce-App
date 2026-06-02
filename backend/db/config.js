const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/e-commerce';

mongoose.connect(mongoURI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));