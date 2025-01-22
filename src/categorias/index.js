import { Router } from "express";
import { categorias } from "./controller.js";

const rotas = Router();

rotas.get("/", categorias);

export { rotas };
