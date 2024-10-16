const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const reservationsRouter = require("./reservations/reservations.router");
const tablesRouter = require("./tables/tables.router");

const app = express();

app.use(cors());
app.use(express.json());

// Add a root route ("/") to avoid "Path not found" error
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Restaurant Reservation API" });
});

app.use("/reservations", reservationsRouter);
app.use("/tables", tablesRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;