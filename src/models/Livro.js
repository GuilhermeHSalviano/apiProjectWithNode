import mongoose from "mongoose"

//criamos aqui um schema que consiste na representação de um livro
const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        autor: {type: String, required: true},
        editora: {type: String, required: true},
        titulo: {type: String, required: true},
        numeroPaginas: {type: Number}
    }
)
//aqui, criamos uma model cujo primeiro parâmetro consiste no nome da coleção e o segundo, no schema definido na primeira linha
const livros = mongoose.model("livros", livroSchema)

//por fim, exportamos a model para usarmos em outros arquivos.
export default livros