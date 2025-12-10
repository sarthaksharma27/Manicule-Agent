import express from "express";
import cors from "cors";
import healthRouter from "./routes/health.route.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/health", healthRouter);
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
