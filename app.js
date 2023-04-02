const path = require("path");
const config = require("./utils/config");
const middleware = require("./utils/middleware");
const cors = require("cors");
const express = require("express");
const app = express();
const diagnosesRoutes = require("./routes/diagnoses-routes");
const symptomsRoutes = require("./routes/symptoms-routes");

const indexPath = path.resolve(__dirname, "build", "index.html");

// **************** MONGOOSE *********************
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
console.log("connecting to", config.MONGODB_URI);
mongoose
  .connect(config.MONGODB_URI)
  .then(() => console.log("connected to MongoDB"))
  .catch(error => console.log("error connecting to MongoDB:", error.message));

// **************** CORS / JSON *********************
app.use(cors());
app.use(express.json());

// **************** SERVE FRONTEND STATIC BUILD *********************
app.use(express.static("build"));

app.get("/symptoms", (req, res) => res.sendFile(indexPath));
app.get("/symptoms/add", (req, res) => res.sendFile(indexPath));
app.get("/diagnoses", (req, res) => res.sendFile(indexPath));
app.get("/diagnoses/add", (req, res) => res.sendFile(indexPath));

// **************** API ROUTES *********************
app.use("/api/diagnoses", diagnosesRoutes);
app.use("/api/symptoms", symptomsRoutes);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
