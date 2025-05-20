import express from "express";
import cors from "cors";
import { loginRouter } from "./routes/loginRouter.js";
import { todoRouter } from "./routes/todoRouter.js";

const app = express();
const PORT = 5500;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hey!");
});

app.use("/login", loginRouter);
app.use("/todo", todoRouter);

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});
