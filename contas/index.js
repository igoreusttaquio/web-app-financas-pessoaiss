import { response, Router } from "express";
import { contas } from "./controller.js";

const rota = Router();

rota.get("/", contas);

export { rota };
