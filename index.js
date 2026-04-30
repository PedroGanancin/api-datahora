const express = require("express");
const app = express();

// 🔥 LIBERAR CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/datahora", (req, res) => {
  const agora = new Date();

  res.json({
    data: agora.toLocaleDateString(),
    hora: agora.toLocaleTimeString()
  });
});

app.listen(process.env.PORT || 3000);