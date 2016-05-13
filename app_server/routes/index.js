var express = require('express');
var router = express.Router();
var indexCtrl = require('../controller/index');
var location = require('../controller/locations');
var others = require('../controller/others');

/* GET home page. */
router.get('/', location.homeList);
router.get('/location', location.locationInfo);
router.get('/location/review/new', location.addReview);

router.get('/about', others.about);

module.exports = router;
