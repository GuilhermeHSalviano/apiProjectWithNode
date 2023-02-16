//responsável por organizar todas as rotas utilizadas na aplicação
//este arquivo serve para direcionar as rotas de acordo com o método HTTP a ser empregado.
import express from "express"
import livros from './livrosRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"})
    })

    //define os caminhos das rotas a serem utilizadas
    app.use(
        express.json(),
        livros
    )
}

export default routes