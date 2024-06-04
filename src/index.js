import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { router as authRouter } from "./routes/auth.route.js";
import { router as notesRouter } from "./routes/notes.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/notes", notesRouter);

connectDB()
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  });

export { app };
