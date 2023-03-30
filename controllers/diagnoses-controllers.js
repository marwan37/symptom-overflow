const HttpError = require("../models/http-error");
const Diagnosis = require("../models/diagnosis");

const getDiagnoses = async (req, res, next) => {
  let diagnoses;
  try {
    diagnoses = await Diagnosis.find({});
  } catch (err) {
    return next(new HttpError("Fetching diagnoses failed, please try again later", 500));
  }

  res.status(200).json({
    diagnoses: diagnoses.map(dx => dx.toObject({ getters: true }))
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

const createDiagnosis = async (req, res, next) => {
  let diagnoses;
  try {
    diagnoses = await Diagnosis.find({});
  } catch (err) {
    return next(new HttpError("Fetching diagnoses failed, please try again later", 500));
  }

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

  let foundDx;
  try {
    foundDx = await Diagnosis.findById(diagnosisId);
  } catch (err) {
    return next(new HttpError("Could not find diagnosis", 500));
  }

  foundDx.diagnosis = diagnosis;
  foundDx.symptoms = symptoms;
  foundDx.associated_symptoms = associated_symptoms;
  foundDx.minor = minor;
  foundDx.age = age;
  foundDx.tags = tags;

  try {
    await foundDx.save();
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({ diagnosis: foundDx.toObject({ getters: true }) });
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
