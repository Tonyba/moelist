import { Router } from "express";
import {
  createUser,
  loginUser,
} from "../../controllers/User/user.controller.js";

const router = Router();

router.post("/register", createUser);
router.get("/login", loginUser);

export default router;
