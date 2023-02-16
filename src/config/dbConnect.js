//importamos o mongoose aqui
import mongoose from "mongoose";

//fazemos com que o mongoose conecte-se com meu banco de dados
mongoose.connect("endereço do banco de dados")

//criamos uma variável que recebe a conexão do mongosse com o banco
let db = mongoose.connection

//exportamos a conexão para ser usada em outros locais da aplicação.
export default db
