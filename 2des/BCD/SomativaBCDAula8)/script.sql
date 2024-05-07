drop database if exists aluguel;
create database aluguel;
use aluguel

create table Clientes(
    cpf_cliente varchar(15) primary key not null,
    nome_cliente varchar(100) not null
);

create table Telefones(
    cpf_cliente varchar(15) not null,
    telefone varchar(20) not null
);

create table Veiculos(
    placa varchar(8) primary key not null,
    modelo varchar(20) not null,
    marca varchar(30) not null,
    tipo varchar(20) not null,
    diaria decimal(10,2) not null
);

create table Reserva(
    reserva date not null,
    retirada date,
    devolucao date,
    dias integer not null,
    placa varchar(8) not null,
    cpf_cliente varchar(15) not null,
    status varchar(20) not null,
    subtotal decimal(10,2)
);

alter table telefones add foreign key(cpf_cliente) references Clientes (cpf_cliente);
alter table reserva add foreign key(cpf_cliente) references Clientes (cpf_cliente);
alter table reserva add foreign key(placa) references Veiculos (placa);