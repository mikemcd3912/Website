var express = require('express');
var expresshandlebar = require('express-handlebars');
var app = express();
var path = require('path');
process.env.HOSTNAME='localhost';

app.use(express.static('images'));

app.engine('hbs', expresshandlebar({
    layoutsDir:__dirname+'/views/layouts',
    defaultLayout:'main',
    extname:'hbs'}));

app.set('port', 3000);
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.redirect('Home');
});

app.get('/Home', function(req, res) {
    res.render('home');
});

app.get('/AboutMe', function(req,res){
    res.render('aboutMe');
});

app.get('/Experience', function(req, res){
    res.render('experience');
})

app.get('/Projects', function(req, res){
    res.render('projects');
})

app.get('/Contact', function(req, res){
    res.render('contact');
})

app.use(function(err, req, res, next){
    res.type('text/plain')
})

app.listen(app.get('port'), function(){
    console.log(`Express started on http://${process.env.HOSTNAME}:${app.get('port')}; press Ctrl-C to terminate.`)
})