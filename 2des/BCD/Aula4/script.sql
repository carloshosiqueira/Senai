-- cliente(IdCliente [chave primaria], nome, endereco, telefone, email);
-- funcionario (IdFuncionario [chave primaria], nome, cargo, salario);
-- veiculo (IdVeiculo [chave primaria], placa, modelo, capacidade);
-- rota (IdRota [chave primaria], origem, destino, distancia);
-- Entrega (IdEntrega [chave primaria], inicio, fim, status (em andamento, concluida, atrasada), IdRota [Chave estrangeira] referencia Rota(IdRota), 
-- IdVeiculo [Chave estrangeira] referencia (IdVeiculo), Motorista [chave estrangeira] referencia funcionario(IdFuncionario))
-- Pedido (IdPedido [chave primaria], dataPedido, valor, idcliente [chave estrangeira] referencia Cliente(IdCliente), IdEntrega [chave estrangeira] referencia Entrega(IdEntrega))

--DDL Criar tabelas e ralacionamentos

drop database if exists transportadora;
create database transportadora;
use transportadora;

create table Cliente(
    IdCliente integer primary key auto_increment,
    Nome varchar(100) not null,
    Endereco varchar(50) not null,
    Telefone varchar(12) not null,
    Email varchar(100) not null
);

create table Funcionario(
    IdFuncionario integer primary key auto_increment,
    Nome varchar(100) not null,
    Cargo varchar(30) not null, 
    Salario decimal(5,2) not null
);

create table Veiculo(
    IdVeiculo integer primary key auto_increment,
    Placa varchar(10) not null,
    Modelo varchar(20) not null,
    Capacidade varchar(10) not null
);

create table Rota(
    IdRota integer primary key auto_increment,
    Origem varchar(30) not null,
    Destino varchar(30) not null,
    Distancia varchar(10)
);

create table Entrega(
    IdEntrega integer primary key auto_increment,
    Inicio varchar(20) not null,
    Fim varchar(20) not null,
    Estatus varchar(12) not null,
    IdRota integer not null,
    IdVeiculo integer not null,
    Motorista integer not null,
    foreign key (IdRota) references Rota(IdRota),
    foreign key (IdVeiculo) references Veiculo(IdVeiculo),
    foreign key (Motorista) references Funcionario(IdFuncionario)
);

create table Pedido(
    IdPedido integer primary key auto_increment,
    DataPedido date not null,
    Valor decimal(5,2),
    IdCliente integer not null,
    IdEntrega integer not null,
    foreign key (Idcliente) references Cliente(IdCliente),
    foreign key (IdEntrega) references Entrega(IdEntrega)
);

-------------------------------
INSERT INTO Cliente (Nome, Endereco, Telefone, Email) VALUES
('João Silva', 'Rua A, 123', '(11) 91234-5678', 'joao@example.com'),
('Maria Oliveira', 'Av. B, 456', '(11) 92345-6789', 'maria@example.com'),
('Pedro Santos', 'Travessa C, 789', '(11) 93456-7890', 'pedro@example.com'),
('Ana Pereira', 'Rua D, 321', '(11) 94567-8901', 'ana@example.com'),
('Carlos Souza', 'Av. E, 654', '(11) 95678-9012', 'carlos@example.com');

INSERT INTO Funcionario (Nome, Cargo, Salario) VALUES
('Fernanda Lima', 'Motorista', 3000.00),
('José Oliveira', 'Gerente', 5000.00),
('Mariana Costa', 'Assistente', 2500.00);

INSERT INTO Veiculo (Placa, Modelo, Capacidade) VALUES
('ABC1234', 'Caminhão', '1000kg'),
('DEF5678', 'Van', '500kg'),
('GHI9012', 'Caminhonete', '800kg');

INSERT INTO Rota (Origem, Destino, Distancia) VALUES
('São Paulo', 'Rio de Janeiro', '400km'),
('Rio de Janeiro', 'Belo Horizonte', '500km'),
('Belo Horizonte', 'Curitiba', '600km');


INSERT INTO Entrega (Inicio, Fim, Estatus, IdRota, IdVeiculo, Motorista) VALUES
('2024-02-27', '2024-02-28', 'Pendente', 1, 1, 1),
('2024-02-28', '2024-03-01', 'Pendente', 2, 2, 1),
('2024-02-29', '2024-03-01', 'Pendente', 3, 3, 2),
('2024-03-01', '2024-03-02', 'Pendente', 1, 1, 1),
('2024-03-02', '2024-03-03', 'Pendente', 2, 2, 1),
('2024-03-03', '2024-03-04', 'Pendente', 3, 3, 2),
('2024-03-04', '2024-03-05', 'Pendente', 1, 1, 1),
('2024-03-05', '2024-03-06', 'Pendente', 2, 2, 1),
('2024-03-06', '2024-03-07', 'Pendente', 3, 3, 2),
('2024-03-07', '2024-03-08', 'Pendente', 1, 1, 1);


INSERT INTO Pedido (DataPedido, Valor, IdCliente, IdEntrega) VALUES
('2024-02-27', 100.00, 1, 1),
('2024-02-27', 50.00, 2, 1),
('2024-02-28', 120.00, 3, 2),
('2024-02-28', 70.00, 4, 2),
('2024-02-29', 80.00, 5, 3),
('2024-02-29', 90.00, 1, 3),
('2024-02-29', 60.00, 2, 3),
('2024-02-29', 110.00, 3, 3),
('2024-02-29', 40.00, 4, 3),
('2024-02-29', 75.00, 5, 3),
('2024-03-01', 95.00, 1, 4),
('2024-03-01', 55.00, 2, 4),
('2024-03-01', 130.00, 3, 5),
('2024-03-01', 80.00, 4, 5),
('2024-03-02', 85.00, 5, 6),
('2024-03-02', 100.00, 1, 6),
('2024-03-02', 70.00, 2, 7),
('2024-03-02', 120.00, 3, 7),
('2024-03-02', 50.00, 4, 8),
('2024-03-02', 65.00, 5, 8);