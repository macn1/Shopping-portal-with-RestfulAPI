const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const taskRouter = require("./Routes/taskRouter");
const db = require("./config/db");
db();
const port = process.env.PORT;
app.use(express.json());

app.use(morgan("dev"));

app.use("/api", taskRouter);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
