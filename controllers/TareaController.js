const Tarea = require('../models/Tarea.js');

exports.showNewTarea = (req, res) => {
    return res.render('new');
};

exports.showUpdate = (req, res) => {
    res.render('update')
};

exports.getTareas = (req, res) => {
    Tarea.find(function (err, result) {
        if (!err) {
            res.render('show', {
                tareas: result
            });
        }
    });
};

exports.getTarea = (req, res) => {
    var id = req.query['id'];
    var mensaje = "Tarea no encontrada";
    Tarea.findOne({ _id: id }, function (err, result) {

        if (!err && result) {
            mensaje = "Tarea encontrada";
            return res.render('update', {
                tarea: result,
                mensaje: mensaje
            });
        } else {
            res.render('update'), {
                mensaje: mensaje
            }
        }
    });
};

exports.newTarea = (req, res) => {
    var mensaje = "Tarea no añadida";
    var tarea = new Tarea({
        title: req.body['title'],
        description: req.body['description'],
        status: req.body['status']
    });

    tarea.save(function (err, tarea) {
        if (!err) {
            mensaje = "Tarea añadida";
        }
        return res.render('new', {
            mensaje: mensaje
        });
    });
};
exports.updateTarea = (req, res) => {
    var id = req.query['id'];
    var mensaje = "Tarea no actualizada";
    Tarea.findByIdAndUpdate(id, {
        $set: {
            title: req.body['title'],
            description: req.body['description'],
            status: req.body['status']
        }
    }, function (err, tarea) {
        if (!err) {
            mensaje = "Tarea actualizada";
        }
        console.log(err);
        return res.render('update', {
            mensaje: mensaje
        });
    });
};

exports.deleteTarea = (req, res) => {
    var id = req.body['id'];
    var mensaje = "Tarea no eliminada";
    Tarea.findByIdAndDelete(id, function (err, tarea) {
        if (!err && tarea) {
            mensaje = "Tarea eliminada";
        }
        return res.render('show', {
            mensaje: mensaje
        });
    });
};