const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const { router: todoRouter } = require("./Routes/todo");

app.listen(process.env.SERVER_PORT, () => {
  console.log(`The server is now running on port ${process.env.PORT}`);
});

app.use(express.text());
app.use(express.json());
app.use("/todo", todoRouter);
