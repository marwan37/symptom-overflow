const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const symptomSchema = new Schema({
  symptom: { type: String, required: true },
  medical_term: { type: String, required: true },
  tags: { type: String }
});

symptomSchema.set("toObject", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model("Symptom", symptomSchema);
