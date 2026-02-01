import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ status: "ok", message: "Backend is running" });
});

router.get("/health", (req, res) => {
  res.json({ status: "ok", message: "just for (pr relevant testing need to remove this in future" });
});

export default router;
