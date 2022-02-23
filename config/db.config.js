// Arquivo onde criamos a função de conexão com o banco de dados
// Instanciado o ODM mongoose numa variavel
// Iremos nos conectar ao MongoDB utilizando esse ODM
const mongoose = require("mongoose");

// Criando uma função assincrona pois a conexão com o banco retorna uma Promisse
async function connect() {
  try {
    // Utilizando o metodo connect do mongoose para realizar a conexão com o sistema de banco de dados
    // Passamos a URI do banco de dados como parametro, no nosso caso, passamos uma variavel de ambiente
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    // Dando um retorno no console para saber se correu tudo bem
    console.log("Connected to DB:", connection.connection.name);
  } catch (err) {
    // Colocando o erro no console caso a Promisse não resolva
    console.error("Database connection error:", err);
  }
}

// Exportando a função de conexão para invoca-la no app.js
module.exports = connect;
