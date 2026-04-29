const express = require("express");
const app = express();

app.get("/datahora", (req, res) => {
  const agora = new Date();

  res.json({
    data: agora.toLocaleDateString(),
    hora: agora.toLocaleTimeString()
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor rodando");
});
