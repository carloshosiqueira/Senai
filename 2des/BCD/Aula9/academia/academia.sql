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


alter table telefone add foreign key (id_aluno) references aluno(id_aluno);