const express = require("express");
const path = require("path");
const app = express();
const port = 5000; // Schimbă portul aici dacă este nevoie

// Servește fișiere statice din directorul curent
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
