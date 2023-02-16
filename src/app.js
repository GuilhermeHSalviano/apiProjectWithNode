//aqui fazemos a importação do express
import express from "express"

//importamos a conexão feita pelo mongoose com o banco de dados
import db from "./config/dbConnect.js"

import livros from "./models/Livro.js"

import routes from "./routes/index.js"

//aqui temos um método da conexão que realiza um tratamento de erro
db.on("error", console.log.bind(console, "Erro de conexão"))

//aqui temos um método (once) que busca executar o evento (no caso, "open", que abre a conexão) uma vez
db.once("open", () =>{
    console.log('Conexão com o banco feita com sucesso.')
})

//em seguida, criamos uma instância do express para então gerarmos o servidor
const app = express()

//fazemos isso para que o express consiga reconhecer os dados enviados via PUT ou POST no formato JSON.
app.use(express.json())

routes(app)


//aqui, definimos o que será feito quando a api for acessada com uma requisição do 
//tipo get na URL básica ('/')
app.get('/', (req, res) => {
    //o parâmetro 'res', que corresponde a response, no caso abaixo, envia um status 200 e a mensagem 'Curso de Node'
    res.status(200).send('Curso de Node')
})

//aqui, fazemos uma requisição do tipo GET, contudo, passando o ID como parâmetro:
app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    //fazemos com que a propriedade "titulo" do objeto de id específico seja modificado pelo dado recebido pela requisição.
    
    //devolvemos objeto na posição indicada pelo ID.
    res.json(livros[index])
})

//construímos uma rota para requisições do tipo POST
app.post('/livros', (req, res) => {
    //ao 
    livros.push(req.body)
    //via de regra, para a criação de dados na API utilizamos o número 201 como representação de status ok
    res.status(201).send('O livro foi cadastrado com sucesso.')
})
//construímos uma rota para requisições do tipo PUT. Usamos dois pontos para indicar que chegará um parâmetro usado para identificar
//o item que será modificado
app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    //fazemos com que a propriedade "titulo" do objeto de id específico seja modificado pelo dado recebido pela requisição.
    livros[index].titulo = req.body.titulo

    //devolvemos o array com a modificação
    res.json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params
    let index = buscaLivro(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} excluído com sucesso!`)
})

function buscaLivro (id){
    return livros.findIndex(livro => livro.id == id)
}

//aqui, exportamos o app para o empregarmos no arquivo onde se encontra o arquivo com a função de ativar o servidor e fazê-lo escutar na porta definida.
export default app