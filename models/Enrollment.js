import mongoose from "mongoose";

const enrollmentSchema = mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Student",
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Course",
  },
});

export default mongoose.model("Enrollment", enrollmentSchema);
