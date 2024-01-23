-- Exclui um banco de dados se ele existe
drop database if exists lojinha;
create database lojinha;
use lojinha;

-- Ver todas as tabelas
show tables;

-- Criar uma tabela de Clientes (Create)
create table Clientes(
    id integer primary key not null auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    nascimento date not null
);

-- Ver a estrutura da tabela (Read)
describe Clientes;

-- Alterar algo na tabela (Update)
alter table Clientes;

-- Apagar tabela (Delete)
drop table Clientes;

-- Dados - Insert, select, update, delete