import Express, { Request, Response } from "express";

export const userRoutes = Express.Router();

type User = {
  id: number;
  nome: string;
  email: string;
};

let id = 0;
let usuarios: User[] = [];

userRoutes.get("/users", (req: Request, res: Response) => {
  res.send(usuarios);
});

userRoutes.get("/users/:id", (req: Request, res: Response) => {
  let userId = Number(req.params.id);
  let user = usuarios.find((user) => user.id === userId);
  res.send(user);
});

userRoutes.post("/users", (req: Request, res: Response) => {
  let user = req.body;
  user.id = ++id;
  usuarios.push(user);
  res.send({
    mensage: "Usuário criado com sucesso!",
  });
});

userRoutes.put("/users/:id", (req: Request, res: Response) => {
  let userId = Number(req.params.id);
  let user = req.body;
  let atualizaUsuario = usuarios.findIndex(
    (_user: User) => _user.id === userId
  );
  usuarios[atualizaUsuario].nome = user.nome;
  usuarios[atualizaUsuario].email = user.email;
  res.send({
    mesage: "Usuario foi alterado!",
  });
});

userRoutes.delete("/users/:id", (req: Request, res: Response) => {
  let userId = Number(req.params.id);
  let deleteUsuario = usuarios.findIndex((user: User) => user.id === userId);
  usuarios.splice(deleteUsuario, 1);
  res.send({
    message: "Usuáario removido !",
  });
});
