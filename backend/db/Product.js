const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    category:String,
    brand:String,
    userId:String,
    price:String,
});

module.exports = mongoose.model("products",productSchema);