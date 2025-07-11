"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const porta = 3000;
app.get("/", (req, res) => {
    res.send("ola bem vindo ao servidor");
});
app.listen(porta, () => {
    console.log(`Servidor ronando na porta ${porta}`);
});
//# sourceMappingURL=index.js.map