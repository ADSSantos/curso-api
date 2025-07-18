"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./router/index");
const app = (0, express_1.default)();
const porta = 3000;
(0, index_1.routes)(app);
app.listen(porta, () => {
    console.log(`Servidor ronando na porta ${porta}`);
});
//# sourceMappingURL=index.js.map