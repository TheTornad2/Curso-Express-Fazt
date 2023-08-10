import { Router } from "express";

const router = Router();

router.get("/users", (req, res) => {
  console.log(req.body);
  res.render("users");
});

export default router;
