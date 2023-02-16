//este arquivo é responsável por definir as rotas e dizer qual função será chamada para cada rota acionada
import express from "express"
import LivroController from "../controller/livrosController.js"

const router = express.Router()

router
    .get("/livros", LivroController.listarLivros)

export default router