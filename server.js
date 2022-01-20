const fs = require("fs");
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

const data = JSON.parse(fs.readFileSync("./data/data.json"));

app.listen(PORT, () => {
  console.log(`App listen on port http://localhost:${PORT}`);
});

app.get("/data", (req, res) => {
  res.status(200).json({
    data,
  });
});
