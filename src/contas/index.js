import { Router } from "express";
import { contas, criarConta } from "./controller.js";

const rota = Router();

rota.get("/", contas);
rota.post("/", criarConta);

export { rota };
