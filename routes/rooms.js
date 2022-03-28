const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const rooms = require('../controllers/rooms');
const { isLoggedIn, isAuthor, validateRoom } = require('../middlewares/room');
const multer  = require('multer')

const {storage} = require('../cloudinary')
const upload = multer({ storage })

const Room = require('../models/room');

router.route('/')
    .get(catchAsync(rooms.index))
    .post(isLoggedIn,  upload.array('image'), validateRoom, catchAsync(rooms.createRoom))

    //.post(isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground))

router.get('/new', isLoggedIn, rooms.renderNewForm)

router.route('/:id')
    .get(catchAsync(rooms.showRoom))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateRoom, catchAsync(rooms.updateRoom))
    .delete(isLoggedIn, isAuthor, catchAsync(rooms.deleteRoom));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(rooms.renderEditForm))



module.exports = router;