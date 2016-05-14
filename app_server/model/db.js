var mongoose = require('mongoose');
var readLine = require("readline");

const SIGUSR2 = 'SIGUSR2';
const SIGINT = 'SIGINT';
const SIGTERM = 'SIGTERM';

if (process.platform === "win32") {
    var rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on("SIGINT", function () {
        process.emit("SIGINT");
    });
}
var databaseUrl = 'mongodb://localhost/Loc8r';
/*if (process.env.NODE_ENV === 'production') {
    databaseUrl = 'mongodb://heroku_app20110907:4rqhlidfdqq6vgdi06c15jrlpf@ds033669.mongolab.com:33669/heroku_app20110907';
}*/

var openingTimeSchema = new mongoose.Schema({
    days: {type: String, required: true},
    opening: String,
    closing: String,
    closed: {type: Boolean, required: true}
});

var reviewSchema = new mongoose.Schema({
    author: String,
    rating: {type: Number, required: true, min: 0, max: 5},
    reviewText: String,
    createdOn: {type: Date, "default": Date.now}
});

var locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    rating: {
        type: Number,
        "default": 0,
        min: 0,
        max: 5
    },
    facilities: [String],
    coords: {type: [Number], index: '2dsphere'},
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});

mongoose.model('Location', locationSchema);

mongoose.connect(databaseUrl);

mongoose.connection.on('connected', function () {
    console.log('Mongoose. Connected to', databaseUrl);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose. Connection error', err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose. Disconnected from', databaseUrl);
});

var gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongose disconnected through', msg);
        callback();
    });
};

process.once(SIGUSR2, function () {
    gracefulShutdown('Nodemon restart', function () {
        process.kill(process.pid, SIGUSR2);
    });
});

process.on(SIGINT, function () {
    gracefulShutdown('App termination', function () {
        process.exit(0);
    });
});

process.on(SIGTERM, function () {
    gracefulShutdown('Heroku app shutdown', function () {
        process.exit(0);
    });
});