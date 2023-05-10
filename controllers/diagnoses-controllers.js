const HttpError = require("../models/http-error");
const Diagnosis = require("../models/diagnosis");

const getDiagnoses = async (req, res, next) => {
  let diagnoses;
  try {
    diagnoses = await Diagnosis.find({}).sort({ tags: 1, diagnosis: 1 });
  } catch (err) {
    return next(new HttpError("Fetching diagnoses failed, please try again later", 500));
  }

  const diagnosesHashTable = {};
  diagnoses.forEach(dx => {
    const tags = dx.tags || "all";
    if (!diagnosesHashTable[tags]) {
      diagnosesHashTable[tags] = {};
    }
    diagnosesHashTable[tags][dx.id] = dx.toObject({ getters: true });
  });

  res.status(200).json({
    diagnoses: diagnosesHashTable
  });
};

const getDiagnosisById = async (req, res, next) => {
  const diagnosisId = req.params.id;

  let diagnosis;
  try {
    diagnosis = await Diagnosis.findById(diagnosisId);
  } catch (err) {
    console.log(err);
    const error = new HttpError("Something went wrong, could not find diagnosis.", 500);
    return next(error);
  }

  if (!diagnosis) {
    const error = new HttpError("Could not find a diagnosis for the provided id.", 404);
    return next(error);
  }

  res.json({ diagnosis: diagnosis.toObject({ getters: true }) });
};

const createDiagnosis = async (req, res) => {
  const { diagnosis, symptoms, associated_symptoms, minor, age, tags } = req.body;

  const newDiagnosis = new Diagnosis({
    diagnosis,
    symptoms,
    associated_symptoms,
    minor,
    age,
    tags
  });

  try {
    await newDiagnosis.save();
  } catch (err) {
    console.log(err);
  }

  res.status(201).json({ newDiagnosis });
};

const updateDiagnosis = async (req, res, next) => {
  const { diagnosis, symptoms, associated_symptoms, minor, age, tags } = req.body;
  const diagnosisId = req.params.id;

  await Diagnosis.findByIdAndUpdate(
    diagnosisId,
    { diagnosis, symptoms, associated_symptoms, minor, age, tags },
    { new: true }
  )
    .then(updatedDiagnosis =>
      res.status(200).json({ diagnosis: updatedDiagnosis.toObject({ getters: true }) })
    )
    .catch(error => next(error));
};

const deleteDiagnosis = async (req, res, next) => {
  const diagnosisId = req.params.id;

  let diagnosis;
  try {
    diagnosis = await Diagnosis.findById(diagnosisId);
  } catch (err) {
    return next(new HttpError("Could not find symptom", 500));
  }

  try {
    await diagnosis.remove();
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({ message: "Deleted diagnosis." });
};

module.exports = {
  getDiagnoses,
  getDiagnosisById,
  createDiagnosis,
  updateDiagnosis,
  deleteDiagnosis
};
