var mongoose = require('mongoose'),
Schema = mongoose.Schema;
/**
* Getters
*/
var getTags = function (tags) {
    return tags.join(',');
};
/**
* Setters
*/
var setTags = function (tags) {
    return tags+"".split(',');
};
var TareaSchema = new Schema({
    title: String,
    description: {type : String, default : '', trim : true},
    status:{type: String, enum: ['todo', 'doing', 'review','done']},
    tags: {type: [], get: getTags, set: setTags},
    createdAt : {type : Date, default : Date.now},
    createdBy: String
});

module.exports = mongoose.model('Tarea', TareaSchema);