//importamos o app do arquivo app.js que criou o express e definiu as rotas.
import app from './src/app.js'

//definimos a porta como uma condicional. Esta porta será a encontrada pelo process.env.PORT (porta da produção) ou será a 3000 (porta local)
const port = process.env.PORT || 3000

//aqui, utilizamos o método listen que faz com que o servidor local seja executado e escute as requisições na porta previamente definida.
app.listen(port, () =>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})