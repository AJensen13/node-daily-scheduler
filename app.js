var express = require('express'),
    chalk = require('chalk'),
    calendar = require('node-calendar');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/profile', function(req, res){
    var myProfile = {
        username: "John Barthomoleo",
        biography: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
        imgurl: "images/default-placeholder.png",
        calendars: [
            {
                name: 'Calendar 1',
                url: '#'
            },
            {
                name: 'Calendar 2',
                url: '#'
            }
        ]
    }
    res.render('profile', myProfile);
});

app.get('/calendar', function(req, res){
    var date = new Date().getFullYear(),
        cal = new calendar.Calendar(calendar.SUNDAY),
        yearCalendar = cal.yeardaycalendar(date);
    res.render('calendar', yearCalendar);
});

app.listen(port, function(err) {
    console.log(chalk.green('Running server on port ' + port));
});