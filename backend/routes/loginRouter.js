import express from "express";
import { loginController } from "../controller/loginController.js";

export const loginRouter = express.Router();

loginRouter.post("/", loginController);
