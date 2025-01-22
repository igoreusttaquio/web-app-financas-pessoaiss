import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Função para configurar o middleware para servir arquivos estáticos
export function servirArquivosEstaticos(app) {
  // Obter o diretório atual
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Configurar o middleware para servir arquivos estáticos da pasta 'public'
  app.use(express.static(path.resolve(__dirname, "../../public")));
}
