drop database if exists aluguel;
create database aluguel CHARSET=UTF8 COLLATE utf8_general_ci ;
use aluguel;

Create table Veiculos(
    placa varchar(8) primary key not null,
    modelo varchar(30) not null,
    marca varchar(30) not null,
    ano integer not null
);

Create table Manutencao(
    id_manutencao integer primary key auto_increment,
    matricula integer not null,
    veiculo_placa varchar(8) not null,
    inicio_manutencao date not null,
    fim_manutencao date,
    descricao text not null
);

Create table Funcionarios(
    matricula integer primary key not null,
    nome varchar(50) not null,
    sobrenome varchar(50) not null
);

CREATE TABLE Telefones (
    matricula integer not null,
    telefone varchar(50) not null
);

alter table Manutencao add foreign key (matricula) references Funcionarios(matricula);
alter table Manutencao add foreign key (veiculo_placa) references Veiculos(placa);
alter table Telefones add foreign key (matricula) references Funcionarios(matricula);