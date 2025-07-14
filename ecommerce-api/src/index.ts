import express, { Request, Response } from "express";

const app = express();
const porta = 3000;
app.use(express.json()); // informa ao sistema o tipo do arquivo esperado

app.get("/", (req: Request, res: Response) => {
  res.send("ola bem vindo ao servidor com tsc watch ok");
});



app.listen(porta, () => {
  console.log(`Servidor ronando na porta ${porta}`);
});
