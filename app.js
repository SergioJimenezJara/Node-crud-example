var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// Controladores
const tareaController = require('./controllers/TareaController')

// Este es el motor de plantillas por defecto que viene en Pug(Jade)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Para importar los recursos
app.use('/static', express.static('static'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Direcciones
app.get('/', tareaController.getTareas);
app.get('/show', tareaController.getTareas);
app.post('/new', tareaController.newTarea);
app.get('/new', tareaController.showNewTarea);
app.get('/search/id/', tareaController.getTarea);
app.get('/update', tareaController.showUpdate);
app.post('/update', tareaController.updateTarea);
app.post('/delete', tareaController.deleteTarea);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
