import { Router } from "express";
import { authorsController, booksController } from "../controllers";

const router = Router();

router.get("/livro", booksController.getAll );
router.get("/autor/:id", authorsController.getById);

router.post("/autor", authorsController.create);
router.post(
  "/autor/:id/livro",
  booksController.create
);

export { router };
