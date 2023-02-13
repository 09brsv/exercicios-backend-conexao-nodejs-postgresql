import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { pool } from "../../shared/database";
import { ApiError } from "../../shared/utils/ApiErrors";
import { validation } from "../../shared/utils/FieldsValidation";

export const create = async (
  req: Request<Iparams, {}, IBook>,
  res: Response
) => {
  const { nome, genero, editora, data_publicacao } = req.body;
  const { id } = req.params;

  const isIncorrect = validation({ nome, genero, editora, data_publicacao });

  if (isIncorrect)
    throw new ApiError("Erros", StatusCodes.BAD_REQUEST, isIncorrect);

  const queryPost =
    `insert into livros (nome, genero, editora, data_publicacao, autor_id) values (${nome}, ${genero}, ${editora}, ${data_publicacao}, ${id})`;


    await pool.query(queryPost);
    const getNewBook = await pool.query(
      "select * from livros where nome = $1",
      [nome]
    );
    return res.status(StatusCodes.CREATED).json(getNewBook.rows[0]);
};
