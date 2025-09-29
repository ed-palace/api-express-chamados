import express from "express"
import conectaNaBase from "./config/dbConnect.js"
import routes from "./routes/index.js"  


const conexao = await conectaNaBase()

conexao.on("error", (err) => {
    console.error("erro conexao". erro)
})

conexao.once("open" ,() => {
    console.log("Conexao feita com sucesso")
})

const app = express()
routes(app)


export default app

