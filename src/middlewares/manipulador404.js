function manipulador404(req , res , _next) {
res.status(404).send({message: "Pagina não encontrada"})
}

export default manipulador404