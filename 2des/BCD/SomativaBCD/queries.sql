-- 1 Crie uma consulta que liste os clientes em ordem alfabética de nome
select * from clientes order by nome_cliente;

-- 2 Crie uma consulta que liste todos os clientes e seus telefones
select c.nome_cliente, t.telefone from clientes c left join Telefones t on c.cpf_cliente = t.cpf_cliente;

--3 Crie uma consulta que liste todos os veículos em ordem crescente de marca e modelo
select * from Veiculos order by marca, modelo;

-- 4 Crie uma consulta que mostre somente os veículos da marca 'Fiat' ordenados pela diária decrescente
select * from Veiculos where marca = 'Fiat' order by diaria desc;

-- 5 Crie uma consulta que mostre todos os dados dos veículos e a quantidade de aluguéis realizadas em cada um
select v.*, count(r.placa) as 'Quantidade de aluguéis' from Veiculos v left join Reserva r on v.placa = r.placa
group by v.placa;


--Crie um relatório que mostre todos os auguéis acrescidos do nome do cliente,
-- modelo e marca do veículo, dias, subtotal e salve 
--como uma visão chamada vw_todos_os_alugueis
drop view if exists vw_todos_os_alugueis;
create view vw_todos_os_alugueis as
select c.cpf_cliente as 'Cpf do Cliente', c.nome_cliente as 'Nome do Cliente', v.modelo as 'Modelo do Veiculo', v.marca as 'Marca do Veiculo',
r.status, r.reserva, r.retirada, r.devolucao, r.dias, r.subtotal from 
Reserva r left join Clientes c on r.cpf_cliente = c.cpf_cliente right join Veiculos v on r.placa = v.placa
order by c.cpf_cliente, v.modelo;