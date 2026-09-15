import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: String, required: true },
});

export default mongoose.model("Course", courseSchema);
