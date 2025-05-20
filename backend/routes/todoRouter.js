import express from "express";
import { todoController } from "../controller/todoController.js";

export const todoRouter = express.Router();

todoRouter.get("/", todoController);
