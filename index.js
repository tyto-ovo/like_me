const express = require("express");
const app = express();
const cors = require("cors");

const { obtenerRegistros, agregarRegistro } = require("./consulta");

/*importar funciones, abrir servidor, llamar páginas  */

app.use(express.json());
app.use(cors());

app.listen(3000, console.log("Servidor encencido en el puerto 3000"));

app.get("./", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("./", async (req, res) => {
  const registros = await obtenerRegistros();
  res.json(registros);
});

app.post("./", async (req, res) => {
  const { titulo, img, descripcion, likes } = req.body;
  await agregarRegistro(titulo, img, descripcion, likes);
  res.send("Registro agregado con éxito");
});
