// app.js inicial
// Importar Express (ES Modules)
import express from "express";

// Crear la aplicación
const app = express();

// Endpoint básico
app.get("/", (req, res) => {
  res.send("¡Hola, nube!");
});

app.get("/soyjs", (req, res) => {
  res.send("¡Hola, Jeisson Ortiz, bienvenido al sistema!");
});

app.get("/ping", (_req, res) => {
  res.json({ pong: true, at: new Date().toISOString() });
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});