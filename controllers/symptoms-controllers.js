const HttpError = require("../models/http-error");
const Symptom = require("../models/symptom");

const getSymptoms = async (req, res, next) => {
  let symptoms;
  try {
    symptoms = await Symptom.find({}).sort({ medical_term: 1, symptom: 1 });
  } catch (err) {
    return next(new HttpError("Fetching symptoms failed, please try again later", 500));
  }

  const symptomsHashTable = {};
  symptoms.forEach(sx => {
    const tags = sx.tags || "Other";
    if (!symptomsHashTable[tags]) {
      symptomsHashTable[tags] = {};
    }
    symptomsHashTable[tags][sx.id] = sx.toObject({ getters: true });
  });

  res.status(200).json({
    symptoms: symptomsHashTable
  });
};

const getSymptomById = async (req, res, next) => {
  const symptomId = req.params.id;

  let symptom;
  try {
    symptom = await Symptom.findById(symptomId);
  } catch (err) {
    const error = new HttpError("Something went wrong, could not find symptom.", 500);
    return next(error);
  }

  if (!symptom) {
    const error = new HttpError("Could not find a symptom for the provided id.", 404);
    return next(error);
  }

  res.json({ symptom: symptom.toObject({ getters: true }) });
};

const createSymptom = async (req, res) => {
  const { symptom, medical_term, tags } = req.body;

  const newSymptom = new Symptom({
    symptom,
    medical_term,
    tags
  });

  try {
    await newSymptom.save();
  } catch (err) {
    console.log(err);
  }

  res.status(201).json({ newSymptom });
};

const updateSymptom = async (req, res, next) => {
  const { symptom, medical_term, tags } = req.body;
  const symptomId = req.params.id;

  await Symptom.findByIdAndUpdate(symptomId, { symptom, medical_term, tags }, { new: true })
    .then(updatedSymptom =>
      res.status(200).json({ symptom: updatedSymptom.toObject({ getters: true }) })
    )
    .catch(error => next(error));
};

const deleteSymptom = async (req, res, next) => {
  const symptomId = req.params.id;

  let symptom;
  try {
    symptom = await Symptom.findById(symptomId);
  } catch (err) {
    return next(new HttpError("Could not find symptom", 500));
  }

  try {
    await symptom.remove();
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({ message: "Deleted symptom." });
};

module.exports = {
  getSymptoms,
  getSymptomById,
  createSymptom,
  updateSymptom,
  deleteSymptom
};
