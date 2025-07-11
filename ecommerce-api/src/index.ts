import express from "express";

const app = express();
const porta = 3000;

app.get("/", (req, res) => {
  res.send("ola bem vindo ao servidor");
});

app.listen(porta, () => {
  console.log(`Servidor ronando na porta ${porta}`);
});
