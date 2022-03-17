const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const priceto = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: "6222452ef9fe1ba10b9fbbaa",
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
           
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price: priceto,
            images: [ { "url" : "https://res.cloudinary.com/doahs2oms/image/upload/v1647445607/YelpCamp/ygvxtgcvjp8uaa060tzn.jpg", "filename" : "YelpCamp/ygvxtgcvjp8uaa060tzn"} , { "url" : "https://res.cloudinary.com/doahs2oms/image/upload/v1647446180/YelpCamp/ep0jm650fpyxkeoeohic.jpg", "filename" : "YelpCamp/ep0jm650fpyxkeoeohic"} ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})