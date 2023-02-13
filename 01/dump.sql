DROP TABLE IF EXISTS "autores";

create table "autores" (
  id serial primary key,
  nome text not null,
  idade integer
  );
  
  DROP TABLE IF EXISTS "livros";
  
  create table "livros" (
    id serial primary key,
    nome text not null,
    genero text,
    editora text,
    data_publicacao date,
    autor_id integer references autores(id)
    );
