import "dotenv/config"
import http from "http"
import app from "./src/app.js"




const PORT = 3000


const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plan"})
    res.end("Chamados")
})

app.listen (PORT, () => {
    console.log("Server rodando")
})