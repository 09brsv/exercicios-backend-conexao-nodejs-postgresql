import { Pool } from "pg";

export const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "88888888",
  database: "exerc_conexao_node",
});
