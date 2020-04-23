const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("API working")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening at port ${PORT}...`));
