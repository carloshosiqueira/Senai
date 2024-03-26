insert into Veiculos (placa, modelo, marca, ano) values 
('DEA-7981', 'Uno', 'Fiat', 2005),
('CBC-4945', 'Fiorino', 'Fiat', 2007),
('BEE-7735', 'Saveiro', 'VW', 2015),
('CBA-4403', 'Sandeiro', 'Renault', 2012),
('BBC-8504', 'Palio', 'Fiat', 2004),
('BEB-5885', 'Gol', 'VW', 2013),
('EDB-2475', 'Ranger', 'Ford', 2005);

insert into Funcionarios (matricula, nome, sobrenome) values
(48482, 'Osvaldo', 'Oliveira'),
(48542, 'Jaqueline', 'Teixeira'),
(48522, 'Keli', 'Matos'),
(48502, 'Ursula', 'Souza'),
(48562, 'Evandro', 'Silva');

insert into Telefones(matricula, telefone) values
(48482, '19-72077-0521'),
(48582, '19-06078-6843'),
(48542, '19-23003-4864'),
(48522, '19-06486-6449'),
(48522, '19-53266-7923'),
(48502, '19-64378-2404'),
(48562, '19-53315-2734');

insert into Manutencao (matricula, veiculo_placa, inicio_manutencao, fim_manutencao, descricao) values

(48482, 'DEA-7981', '2023-02-25', '2023-04-03', 'Lanterna queimada'),
(48542, 'CBC-4945', '2023-03-13', '2023-03-21', 'Farol queimado'),
(48522, 'BEE-7735', '2023-03-29', '2023-04-05', 'Troca de pneus dianteiros'),
(48502, 'CBA-4403', '2023-04-14', '2023-04-24', 'Troca de pneus dianteiros'),
(48502, 'BBC-8504', '2023-04-30', '2023-05-07', 'Farol queimado'),
(48482, 'BEB-5885', '2023-05-16', '2023-05-25', 'Troca de pneus traseiros'),
(48482, 'EDB-2475', '2023-06-05', '2023-06-10', 'Retrovisor quebrado'),
(48482, 'CBC-4945', '2023-06-25', '2023-07-02', 'Troca de óleo e revisão geral'),
(48482, 'EDB-2475', '2023-07-15', '2023-07-19', 'Troca de Fluido de Freio'),
(48502, 'DEA-7981', '2023-08-04', '2023-08-10', 'Problemas no cabo do acelerador'),
(48562, 'CBA-4403', '2023-08-24', '2023-08-31', 'Pane elétrica'),
(48522, 'BBC-8504', '2023-08-31', '2023-09-04', 'Rebimboca da parafuseta'),
(48542, 'BEE-7735', '2023-08-30', '2023-09-04', 'Troca de cavalos por pôneis'),
(48482, 'BEB-5885', '2023-09-02', '2023-09-07', 'Lanterna queimada');
