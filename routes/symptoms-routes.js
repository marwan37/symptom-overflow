const express = require("express");

const symptomsControllers = require("../controllers/symptoms-controllers");

const router = express.Router();

router.post("/", symptomsControllers.createSymptom);

router.get("/:id", symptomsControllers.getSymptomById);

router.patch("/:id", symptomsControllers.updateSymptom);

router.delete("/:id", symptomsControllers.deleteSymptom);

router.get("/", symptomsControllers.getSymptoms);

module.exports = router;
