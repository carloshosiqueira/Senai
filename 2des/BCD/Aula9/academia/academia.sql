DROP DATABASE IF EXISTS academia;
CREATE DATABASE academia CHARSET=UTF8 COLLATE utf8_general_ci;
USE academia;

create table telefone(
    id_aluno integer not null,
    telefone varchar(15) not null unique
);

create table exercicio(
    id_exercicio integer primary key auto_increment,
    aparelho varchar(30) not null,
    grupo_muscular varchar(20) not null,
    descricao text not null
);

create table aluno(
    id_aluno integer primary key unique,
    nome varchar(100) not null,
    nascimento date not null,
    sexo varchar(1),
    peso decimal (5,2)
);

create table ficha (
    id_aluno integer not null,
    id_exercicio integer not null,
    dia_semana text not null,
    serie text not null
);


alter table telefone add foreign key (id_aluno) references aluno(id_aluno);
alter table ficha add foreign key (id_aluno) references aluno(id_aluno);
alter table ficha add foreign key (id_exercicio) references exercicio(id_exercicio);

-- LOAD DATA INFILE 'C:/Users/des/Desktop/Senai/2des/BCD/Aula9/academia/aluno.csv'
-- INTO TABLE aluno
-- FIELDS TERMINATED BY ';'
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\n'
-- IGNORE 1 ROWS;
