import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
});

export default mongoose.model("Student", studentSchema);
