"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
exports.userRoutes = express_1.default.Router();
let id = 0;
let usuarios = [];
exports.userRoutes.get("/users", (req, res) => {
    res.send(usuarios);
});
exports.userRoutes.get("/users/:id", (req, res) => {
    let userId = Number(req.params.id);
    let user = usuarios.find((user) => user.id === userId);
    res.send(user);
});
exports.userRoutes.post("/users", (req, res) => {
    let user = req.body;
    user.id = ++id;
    usuarios.push(user);
    res.send({
        mensage: "Usuário criado com sucesso!",
    });
});
exports.userRoutes.put("/users/:id", (req, res) => {
    let userId = Number(req.params.id);
    let user = req.body;
    let atualizaUsuario = usuarios.findIndex((_user) => _user.id === userId);
    usuarios[atualizaUsuario].nome = user.nome;
    usuarios[atualizaUsuario].email = user.email;
    res.send({
        mesage: "Usuario foi alterado!",
    });
});
exports.userRoutes.delete("/users/:id", (req, res) => {
    let userId = Number(req.params.id);
    let deleteUsuario = usuarios.findIndex((user) => user.id === userId);
    usuarios.splice(deleteUsuario, 1);
    res.send({
        message: "Usuáario removido !",
    });
});
//# sourceMappingURL=user.route.js.map