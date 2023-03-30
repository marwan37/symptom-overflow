const config = require("./utils/config");
const middleware = require("./utils/middleware");

const cors = require("cors");
const express = require("express");
const app = express();

const diagnosesRoutes = require("./routes/diagnoses-routes");
const symptomsRoutes = require("./routes/symptoms-routes");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

console.log("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => console.log("connected to MongoDB"))
  .catch(error => console.log("error connecting to MongoDB:", error.message));

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.use("/api/diagnoses", diagnosesRoutes);
app.use("/api/symptoms", symptomsRoutes);

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
//   next();
// });

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
