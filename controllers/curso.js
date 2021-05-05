const { response } = require("express");
const Curso = require("../models/Curso");
const getCursos = async (req, res = response)=>{
    let courses = await Curso.find({},"name").exec();
    res.status(200).json(courses)
}
const postCurso = async (req, res = response) => {
    const {name} = req.body;
    let newCourse = await Curso.findOne({ name });
    
    if(newCourse){
        return res.status(400).json({
            ok:false,
            msg:`Course '${name}' already registered :c`,
        })
    }
    newCourse = Curso(req.body);
    newCourse.save();
    res.status(200).json({
        ok:true,
        name
    })

}
module.exports={
    getCursos,
    postCurso,
}