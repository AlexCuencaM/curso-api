const {Router} = require("express");
const { getCursos, postCurso } = require("../controllers/curso");

const router = Router();
router.get("/",getCursos);
router.post("/", postCurso);

module.exports = router