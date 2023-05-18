const path = require("path");
const config = require("./utils/config");
const middleware = require("./utils/middleware");
const cors = require("cors");
const express = require("express");
const app = express();
const diagnosesRoutes = require("./routes/diagnoses-routes");
const symptomsRoutes = require("./routes/symptoms-routes");

// const http = require("http");
// const httpProxy = require("http-proxy");
// const proxy = httpProxy.createProxyServer({});

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

// **************** API ROUTES *********************
// Proxy requests to the API server
// http
//   .createServer(function (req, res) {
//     proxy.web(req, res, { target: config.PROXY_URL });
//   })
//   .listen(3000);

app.use("/api/diagnoses", diagnosesRoutes);
app.use("/api/symptoms", symptomsRoutes);

// **************** SERVE FRONTEND STATIC BUILD *********************
app.use(express.static("build"));

// Catch-all route to handle client-side routing and serve index.html
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.get("/symptoms", (req, res) => res.sendFile(indexPath));
app.get("/symptoms/add", (req, res) => res.sendFile(indexPath));
app.get("/symptoms/:id", (req, res) => res.sendFile(indexPath));

app.get("/diagnoses", (req, res) => res.sendFile(indexPath));
app.get("/diagnoses/add", (req, res) => res.sendFile(indexPath));
app.get("/diagnoses/:id", (req, res) => res.sendFile(indexPath));

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
