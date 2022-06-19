import express from "express";

import { AuthController } from "../controllers";
import { validationMidlwr } from "../middlewares";
import { loginSchema } from "../schemas";

const authRouter = express.Router()

authRouter.post("/auth", validationMidlwr(loginSchema), AuthController.login)

export default authRouter;
