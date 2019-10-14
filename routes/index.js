var express = require('express');
var router = express.Router();
var data = require('../controllers/Data');
var tareaController = require('../controllers/TareaController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index'});
});


/* GET ejercicio2 page. */
router.get('/ejercicio2', function(req, res, next){
  res.render('ejercicio2', {
    title : "Ejercicio 2 JADE",
    nombres: data.getNames()
  });
});

router.get('/new', function(req, res, next){
  res.render('new', {title : "Nuevo"});
});

router.get('/edit', function(req, res, next){
  res.render('edit', {title : "Editar"});
});

router.get('/search', function(req, res, next){
  res.render('search', {title : "buscar"});
});


module.exports = router;
