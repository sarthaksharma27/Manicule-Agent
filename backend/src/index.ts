import express from "express";
import cors from "cors";

import healthRouter from "./routes/health.route.js";
import uploadRouter from "./routes/upload.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRouter);
app.use("/upload", uploadRouter);
app.use("/update", updateRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
