import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { pool } from "../../shared/database";

export const getById = async (req: Request<Iparams>, res: Response) => {
  const { id } = req.params;

  const { rows } = await pool.query(
    "select a.id as autorId, a.nome as autorNome, a.idade, * from autores a join livros l on a.id = $1 where a.id = l.autor_id",
    [id]
  );
  if (rows[0]) {
    const result = {
      id: rows[0].autorid,
      nome: rows[0].autornome,
      idade: rows[0].idade,
      livros: rows.map((livro) => {
        return {
          id: livro.id,
          nome: livro.nome,
          genero: livro.genero,
          editora: livro.editora,
          data_publicacao: livro.data_publicacao,
        };
      }),
    };
    return res.json(result);
  } else {
    return res.status(StatusCodes.NOT_FOUND).json({
      mensagem: "livro não encontrado",
    });
  }
};
