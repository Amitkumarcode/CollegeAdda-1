const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://test:test@123@cluster0.yparz.mongodb.net/test').then(()=> console.log("Connected to database"))



const schema = new mongoose.Schema({
    title: String,
    description: String,
    type: String,
    sub_type: String,
    owner_name: String,
    owner_mob: String,
    owner_email: String,
    owner_image: String,
    date_of_post: {type: Date , default: Date.now()},
    price: Number,
    state: String,
    city: String,
    college_name: String,
    image: [String],
    isWish : Boolean
});

const productUpload = mongoose.model('products' , schema);
module.exports = productUpload;
