require("dotenv").config();
const express = require("express");
// const connect = require("./config/db.config");
// connect();
require("./config/db.config")();

const app = express();

app.use(express.json());

const contentRouter = require("./routes/content.routes");
app.use("/content", contentRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running at port ${process.env.PORT}`);
});
