import e from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import enrollmentRoute from "./routes/enrollmentRoute.js";

const app = e();
const PORT = process.env.PORT;

app.use(e.json());

app.use("/enrollment", enrollmentRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
  });
});
