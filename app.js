const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const diagnosesRoutes = require("./routes/diagnoses-routes");
const symptomsRoutes = require("./routes/symptoms-routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api/diagnoses", diagnosesRoutes);
app.use("/api/symptoms", symptomsRoutes);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.oyzpel9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.PORT);
  })
  .catch(err => {
    console.log(err);
  });
