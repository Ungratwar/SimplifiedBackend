const express = require("express");
const app = express();
const conn = require("./db");
const PORT = 5000;
const rateLimiterMiddleware = require("./middelwares/ratelimit-handler");
const errorHandler = require("./middelwares/error-handler");
const swaggerUI = require("swagger-ui-express"),
  swaggerDocs = require("./swagger-output.json");
 require("dotenv").config();

conn.connection.on("connected", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to mongooDB");
  }
});
// app.use(rateLimiterMiddleware);
app.use(express.json());
app.use("/user", require("./route/user"));
app.use("/staff", require("./route/staff"));

app.use(errorHandler);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

module.exports = app;