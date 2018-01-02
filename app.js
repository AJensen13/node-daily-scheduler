var chalk = require('chalk')
    express = require('express');

var app = express();

app.use(express.static('views'));

app.get('/', function(req, res) {
    res.send('index.html');
});

app.get('/:id/profile/', function(req, res){

});

app.get('/:id/calendar/', function(req, res){

});

// app.get('/:id/', function(req, res){

// });

app.listen(3000);