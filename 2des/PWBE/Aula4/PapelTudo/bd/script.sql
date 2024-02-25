-- SQL do banco de dados de Inventários com apenas uma tabela
DROP DATABASE IF EXISTS inventario;
CREATE DATABASE inventario CHARSET=UTF8 COLLATE utf8_general_ci;
USE inventario;
-- DDL Criação da estrutura da tabela
CREATE TABLE item(
    id integer not null primary key auto_increment,
    nome varchar(50) not null,
    descricao text,
    valor decimal(10,2) not null
);
-- DML Popular a tabela com dados de teste
INSERT INTO item (nome, descricao, valor) VALUES
('Mesa','Mesa de escritório',100.00),
('Computador','Desktop DEL i5, 8GB RAM, SSD 500GB',2200.00),
('Cadeira','Cadeira giratória de escritório',500.00),
('Longarina','Longarina de três cadeiras',450.00),
('Prateleira','Prateleira de vidro',2500.00),
('Prateleira','Prateleira de Madeira',1600.00);