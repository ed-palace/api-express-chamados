import aberturaChamado from "../models/chamados.js";


class ChamadosController {

static async listarChamados (req , res) {
    try{
        const listaNumerosChamados = await aberturaChamado.find({})
        res.status(200).json(listaNumerosChamados)
    }catch (err) {  
        res.status(500).json({message: `${err.message} - falha na listagem dos chamados`})

    }
 
}

static async listarChamadosPorId (req , res) {
    try{
        const id = req.params.id
        const listaChamadoId = await aberturaChamado.findById(id)
        res.status(200).json(listaChamadoId)
    }catch (err) {  
        res.status(500).json({message: `${err.message} - falha na listagem dos chamados`})

    }
 
}

static async criarChamado (req, res) {
    try {
    const novoChamado = await aberturaChamado.create(req.body)
    res.status(201).json({message: "Chamado criado com sucesso", aberturaChamado, novoChamado})

    }
    catch (err) {
    res.status(500).json({message: `${err.message} - falha ao criar chamado`})
    }
}

static async atualizarChamados (req , res) {
    try{
        const id = req.params.id
        await aberturaChamado.findByIdAndUpdate(id, req.body)
        res.status(200).json({message: "chamado atualizado"})
    }catch (err) {  
        res.status(500).json({message: `${err.message} - falha na listagem dos chamados`})

    }
 
}

static async apagarChamado (req , res) {
    try{
        const id = req.params.id
        await aberturaChamado.findByIdAndDelete(id)
        res.status(200).json({message: "chamado apagado com sucesso"})
    }catch (err) {  
        res.status(500).json({message: `${err.message} - falha`})

    }
 
}

}

export default ChamadosController