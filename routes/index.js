var express = require('express');
var router = express.Router();

// Get home page
router.get('/', function(req, res) {
  res.render('home');
});

// Get Home page with route
router.get('/Home', function(req, res) {
  res.render('home');
});

// Get About me page
router.get('/AboutMe', function(req,res){
  res.render('aboutMe');
});

// Get Experience Page
router.get('/Experience', function(req, res){
  res.render('experience');
});

// Get Projects Page
router.get('/Projects', function(req, res){
  res.render('projects');
});

// Get Contact info Page
router.get('/Contact', function(req, res){
  res.render('contact');
});

module.exports = router;
