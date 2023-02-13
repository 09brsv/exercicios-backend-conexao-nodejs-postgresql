import { Request, Response } from "express";
import { pool } from "../../shared/database";

export const getAll = async (req: Request, res: Response) => {

    const { rows } = await pool.query(
      "select l.*, a.nome as autornome, a.idade from livros l join autores a on a.id = l.autor_id"
    );
    if (rows[0]) {
      const result = rows.map((livro) => {
        return {
          id: livro.id,
          nome: livro.nome,
          genero: livro.genero,
          data_publicacao: livro.data_publicacao,
          autor: {
            id: livro.autor_id,
            nome: livro.autornome,
            idade: livro.idade,
          },
        };
      });
      return res.json(result);
    } else {
      return res.send(rows);
    }
};
