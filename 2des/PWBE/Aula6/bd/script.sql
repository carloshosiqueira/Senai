drop database if exists tarefas;
create database tarefas;
use tarefas;

create table Usuarios (
    idUsuario int primary key auto_increment,
    nome varchar(100) not null,
    email varchar(100) not null,
    senha varchar(18) not null
);

create table Tarefas (
    idTarefa int primary key auto_increment,
    descricao text not null,
    dataDeVencimento datetime not null,
    Status varchar(50),
    idUsuario int not null
);

alter table Tarefas add foreign key (idUsuario) references Usuarios(idUsuario);

