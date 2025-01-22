import { response, Router } from "express";
import { transacoes } from "./controller.js";

const rota = Router();

rota.get("/", transacoes);

export { rota };
