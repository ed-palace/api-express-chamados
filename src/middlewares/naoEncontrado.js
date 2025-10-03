class NaoEncontrado extends Error {
    constructor(message = "Pagina nao encontrada") {
        super(message , 404)
    }
}

export default NaoEncontrado