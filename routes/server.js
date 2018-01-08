var chalk = require('chalk'),
    path = require('path'),
    express = require('express'),
    router = express.Router();

var app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static('views')); 

router.get('/', function(req, res) {
    res.render('index.html');
});

router.get('/calendar', function(req, res) {
    res.render('calendar.html');
});

router.get('/profile', function(req, res) {
    res.render('profile.html');
});

// app.get('/:id/profile/', function(req, res){

// });

// app.get('/:id/calendar/', function(req, res){

// });

// app.get('/:id/', function(req, res){

// });

app.listen(3000);

module.exports = app;