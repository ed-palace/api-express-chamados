import express from "express"
import aberturaChamado from "./chamadosRoutes.js"

const routes = (app) => {
app.route("/").get ((req,res) => res.status(200).send("Lista de chamados"))

app.use(express.json(), aberturaChamado)
}

export default routes