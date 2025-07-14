import express from "express";
import { routes } from "./router/index";

const app = express();
const porta = 3000;

routes(app);

app.listen(porta, () => {
  console.log(`Servidor ronando na porta ${porta}`);
});
