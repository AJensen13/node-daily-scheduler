var express = require('express')
    chalk = require('chalk');;

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/profile', function(req, res){
    res.render('profile');
});

app.get('/calendar', function(req, res){
    res.render('calendar');
});

app.listen(port, function(err) {
    console.log(chalk.green('Running server on port ' + port));
});