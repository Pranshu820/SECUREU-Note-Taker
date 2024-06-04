// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// const authRoutes = require("./routes/auth");
// const notesRoutes = require("./routes/notes");

// dotenv.config();

// const app = express();

// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/notes", notesRoutes);

// const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => console.log(err));

import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  });
