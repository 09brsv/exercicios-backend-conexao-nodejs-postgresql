import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { pool } from "../../shared/database";
import { ApiError } from "../../shared/utils/ApiErrors";
import { validation } from "../../shared/utils/FieldsValidation";


export const create = async (req: Request<{}, {}, IAuthor>, res: Response) => {
  const { nome, idade } = req.body;
  const isIncorrect = validation({ nome,idade });

  if (isIncorrect) throw new ApiError('Erros', StatusCodes.BAD_REQUEST, isIncorrect);

    const queryPost = "insert into autores (nome, idade) values ($1, $2)";
    await pool.query(queryPost, [nome, idade]);
    const getNewAuthor = await pool.query(
      "select * from autores where nome = $1",
      [nome]
    );

    return res.status(StatusCodes.CREATED).json(getNewAuthor.rows[0]);
  
};

