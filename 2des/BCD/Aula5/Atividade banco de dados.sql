-- 1 Crie uma consulta que mostre somente os nomes de todos os clientes
select nome from cliente 

-- 2 Crie uma consulta que agrupe as estregas e mostre quantas cada motorista fez

select motorista, count(idEntrega) as "Quantidade de Entregas" from entrega group by motorista

-- 3 Salve a consulta anterior em um relatório chamado 'entregas por motorista'
drop view if exists EntregasPorMotorista
create view EntregasPorMotorista as 
select motorista, count(idEntrega) as "Quantidade de Entregas" from entrega group by motorista

-- 4 Crie uma consulta que mostre todas as rotas ordenadas por distância

select * from rota order by distancia desc

-- 5 Crie uma consulta que mostre os funcionários ordenados por nome

select * from funcionario order by nome

-- 6 Crie uma consulta que mostre qual veículo fez mais entregas e o total de entregas que ele fez.

select placa, count(placa) as "Quantidade de entregas por veículo" from entrega group by placa

-- 7 Crie um relatório que mostre todas as entregas com os nomes dos motoristas, modelos dos veículos, salve como 'relatorio_de_entregas_01'

drop view if exists relatorio_de_entregas_01 
create view relatorio_de_entregas_01 as 
select f.nome as nome_motorista, v.modelo as modelo_veiculo 
from funcionario f inner join entrega e on f.idFuncionario = e.motorista inner join veiculo v on e.placa = v.placa;

-- 8 Crie um relatório que mostre todas as entregas com os nomes dos motoristas, modelos dos veículos e o valor total da entrega, salve como 'relatorio_de_entregas_02'
drop view if exists relatorio_de_entregas_02;
CREATE VIEW relatorio_de_entregas_02 AS 
SELECT f.nome AS nome_motorista, v.modelo AS modelo_veiculo, SUM(p.valor) AS valor_total_entrega 
FROM funcionario f INNER JOIN entrega e ON f.idFuncionario = e.motorista INNER JOIN veiculo v ON e.placa = v.placa INNER JOIN pedido p ON e.idEntrega = p.idEntrega GROUP BY f.nome, v.modelo;


