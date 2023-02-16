//este arquivo é utilizado para a implementação do método, ou seja, o que deverá ser feito caso haja determinada requisição
import livros from "../models/Livro.js"

class LivroController {
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
           res.status(200).json(livros)
       }) 
    }
}

export default LivroController