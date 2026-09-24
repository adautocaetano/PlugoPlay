import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("."));
app.get("/", (req, res) => {
  res.json({
    app: "PlugoPlay",
    status: "online",
    message: "Backend funcionando!"
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    app: "PlugoPlay",
    version: "1.0.0",
    status: "online"
  });
});

app.get("/api/hello", (req, res) => {
  res.json({
    app: "PlugoPlay",
    message: "Olá! O backend recebeu sua chamada.",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 PlugoPlay Backend rodando em http://localhost:${PORT}`);
});