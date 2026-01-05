import { Router } from "express";
import { upload } from "../middleware/upload.js";

const router = Router();

router.post("/v1", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }

  console.log("Received file:", req.file.originalname);

  res.send("File received");
});

export default router;
