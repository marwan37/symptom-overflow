const express = require("express");

const diagnosesControllers = require("../controllers/diagnoses-controllers");

const router = express.Router();

router.post("/", diagnosesControllers.createDiagnosis);

router.get("/:id", diagnosesControllers.getDiagnosisById);

router.patch("/:id", diagnosesControllers.updateDiagnosis);

router.delete("/:id", diagnosesControllers.deleteDiagnosis);

router.get("/", diagnosesControllers.getDiagnoses);

module.exports = router;
