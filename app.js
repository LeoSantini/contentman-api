// Configurando nosso codigo para trabalhar com variaveis de ambiente utilizando a biblioteca dotenv
// Lembre-se de criar um arquivo na raiz no projeto seguindo o modelo dentro de .exemple.env e colocar os valores nas variaveis
require("dotenv").config();

// Instaciando o express numa variavel
const express = require("express");
// Criando uma nova aplicação express
const app = express();
// Invocando a função para conectar com o banco de dados
// Olhar o arquivo db.config dentro da pasta config
require("./config/db.config")();

// Preparando nosso servidor para receber arquivos JSON
app.use(express.json());

// Enviando para o roteador content as requisições que tiverem "/content" logo no inicio
const contentRouter = require("./routes/content.routes");
app.use("/content", contentRouter);

// Subindo o nosso servidor express
app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running at port ${process.env.PORT}`);
});
