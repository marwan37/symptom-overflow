const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Symptom = require("./symptom");

const Schema = mongoose.Schema;

const diagnosisSchema = new Schema({
  diagnosis: { type: String, required: true, unique: true },
  symptoms: [Symptom.schema],
  associated_symptoms: [Symptom.schema],
  minor: [Symptom.schema],
  age: { type: [Number] },
  tags: { type: String }
});

diagnosisSchema.set("toObject", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

diagnosisSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Diagnosis", diagnosisSchema);
