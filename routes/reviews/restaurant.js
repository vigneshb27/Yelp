const express = require('express');
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn, isReviewAuthor } = require('../../middlewares/review');
const Restaurant = require('../../models/restaurant');
const Review = require('../../models/review');
const reviews = require('../../controllers/reviews/restaurant');
const ExpressError = require('../../utils/ExpressError');
const catchAsync = require('../../utils/catchAsync');

router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview))

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router;