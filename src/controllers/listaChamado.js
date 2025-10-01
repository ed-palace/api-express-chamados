import mongoose from "mongoose";
import aberturaChamado from "../models/chamados.js";


class ChamadosController {

static async listarChamados (req , res, _next) {
    try{
        const listaNumerosChamados = await aberturaChamado.find({})
        res.status(200).json(listaNumerosChamados)
    }catch (err) {  
        _next(err)

    }
 
}

static async listarChamadosPorId (req , res, _next) {
    try{
        const id = req.params.id

        const listaChamadoId = await aberturaChamado.findById(id)

        if(listaChamadoId !== null){
            res.status(200).json(listaChamadoId)

        }else {
            res.status(404).send({message: "falha na listagem dos chamados"})
        }
    }catch (err) {  
    _next(err)

    }
 
}

static async criarChamado (req, res, _next) {
    try {
    const novoChamado = await aberturaChamado.create(req.body)
    res.status(201).json({message: "Chamado criado com sucesso", aberturaChamado, novoChamado})

    }
    catch (err) {
        _next(err)
    }
}

static async atualizarChamados (req , res, _next) {
    try{
        const id = req.params.id

        await aberturaChamado.findByIdAndUpdate(id, req.body)

        res.status(200).json({message: "chamado atualizado"})
    }catch (err) {  
        _next(err)

    }
 
}

static async apagarChamado (req , res, _next) {
    try{
        const id = req.params.id
        await aberturaChamado.findByIdAndDelete(id)
        res.status(200).json({message: "chamado apagado com sucesso"})
    }catch (err) {  
        _next(err)

    }
 
}

}

export default ChamadosController