DROP DATABASE IF EXISTS onibus;
CREATE DATABASE onibus CHARSET=UTF8 COLLATE utf8_general_ci;
USE onibus;

create table dirige(
    cpf varchar(14) not null,
    ID_linha varchar(7)
);

create table telefone(
    cpf varchar(14) not null,
    telefone varchar(15) not null unique
);

create table horario(
    ID_linha varchar(7) not null,
    horarios time not null
);

create table linha(
    ID_linha varchar(7) primary key not null,
    Descricao_linha text not null 
);

create table motorista(
    cpf varchar(14) primary key not null, 
    Nome_motorista varchar(100) not null
);

alter table dirige add foreign key (cpf) references motorista(cpf);
alter table dirige add foreign key (ID_linha) references linha(ID_linha);
alter table telefone add foreign key (cpf) references motorista(cpf);
alter table horario add foreign key (ID_linha) references linha(ID_linha);

-- LOAD DATA INFILE 'C:/Users/des/Desktop/Senai/2des/BCD/Aula9/onibus/telefone.csv'
-- INTO TABLE telefone
-- FIELDS TERMINATED BY ';'
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\n'
-- IGNORE 1 ROWS;

