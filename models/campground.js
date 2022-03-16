const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review');
const CampgroundSchema = new Schema({
    title: String,
    images: [
        {
            url: String,
            filename: String
        }
    ],
    price: Number,
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

CampgroundSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        const reviews = [...doc.reviews]

        for (let review of reviews) {
            await Review.remove({ _id: review })
        }
    }
})

module.exports = mongoose.model('Campground', CampgroundSchema); 