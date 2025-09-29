import mongoose, { version } from "mongoose"

const chamadoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nomeChamado: {type: String, requiered: true},
    dataAbertura: {type: Date, requiered: true},
    descricao : {type: String}
}, {versionKey : false})

const aberturaChamado = mongoose.model("chamados", chamadoSchema)

export default aberturaChamado