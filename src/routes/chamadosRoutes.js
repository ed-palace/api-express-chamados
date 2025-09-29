import express from "express"
import ChamadosController from "../controllers/listaChamado.js"

const routes = express.Router()

routes.get("/chamados", ChamadosController.listarChamados)
routes.get("/chamados/:id", ChamadosController.listarChamadosPorId)
routes.post("/chamados", ChamadosController.criarChamado)
routes.put("/chamados/:id", ChamadosController.atualizarChamados)
routes.delete("/chamados/:id", ChamadosController.apagarChamado)



export default routes

