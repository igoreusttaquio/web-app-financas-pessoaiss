import { dirname } from "path";
import { fileURLToPath } from "url";

export function contas(request, response) {
  response.render(`${dirname(fileURLToPath(import.meta.url))}/views/contas`, {
    title: "Contas",
  });
}
