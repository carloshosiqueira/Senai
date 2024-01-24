--DDL Estrutura do banco de dados

drop database if exists lojinha;
create database lojinha;
use lojinha;
create table Clientes(
    id integer primary key auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    nascimento date not null
);
describe clientes;

-- DML - Popular com dados de teste 

insert into Clientes(cpf, nome, sobrenome, nascimento)
values
("111.111.111-11", "Jair", "Silva", "1980-01-01"),
("222.222.222-22", "Fernando", "Silva", "1990-08-10"),
("333.333.333-33", "Pedro", "Silva", "1985-01-16"),
("444.444.444-44", "Ana", "Silva", "1982-02-19"),
("555.555.555-55", "Márcia", "Silva", "2005-04-23");
("555.555.555-55", "João", "Silva", "2005-04-23");

select * from clientes;