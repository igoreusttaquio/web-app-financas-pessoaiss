import { response, Router } from "express";
import { dashboard } from "./controller.js";

const rota = Router();

rota.get("/", dashboard);

export { rota };
