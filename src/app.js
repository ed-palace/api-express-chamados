import express from "express"
import conectaNaBase from "./config/dbConnect.js"
import routes from "./routes/index.js"  
import mongoose from "mongoose";
import manipulador404 from "./middlewares/manipulador404.js";



const conexao = await conectaNaBase()

conexao.on("error", (err) => {
    console.error("erro conexao". erro)
})

conexao.once("open" ,() => {
    console.log("Conexao feita com sucesso")
})

const app = express()
routes(app)

app.use(manipulador404)


app.use((err, req, res, _next) => {
    if(err instanceof mongoose.Error.CastError){
        res.status(400).send({message: "Um ou mais dados fornecidor estao incorretos"})
    } else if (err instanceof mongoose.Error.ValidationError){
        const messageErro = Object.values(err.errors).map(err => err.message).join("; ")
        res.status(400).send({message: `Os seguintes erros foram encontrados ${messageErro}`})
    }else {
        res.status(500).send({message: "Erro interno do servidor"}) 
    }
} )

export default app

