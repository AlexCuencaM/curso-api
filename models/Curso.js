const { Schema, model } = require("mongoose");
const Curso = Schema({
    name:{
        type: String,
        require: true,
    }
});
module.exports = model('Curso', Curso);