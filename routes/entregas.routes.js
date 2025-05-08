const express = require("express")
const router = express.Router()

const entregasController = require("../controllers/entregas.controllers")

router.get("/",entregasController.leerEntregas)
router.get("/id/:id",entregasController.consultarEntregaById)
// router.get("/status/:status")
router.post("/",entregasController.crearEntrega)
router.put("/id/:id",entregasController.modificarEntregaById)
router.delete("/id/:id", entregasController.eliminarEntregaById)
module.exports = router

