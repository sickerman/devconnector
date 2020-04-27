const express = require("express");
const morgan = require("morgan");
const path = require('path');
const connectDB = require("./config/db");

const app = express();

//connect database
connectDB();

//MIDDLEWARE
app.use(express.json({ extended: false }));

//react app join
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build','index.html')); //relative path
});

//Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

app.use(morgan("tiny"));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log(`Server listening at port ${PORT}...`));
