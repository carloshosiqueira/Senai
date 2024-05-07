-- 1 
SELECT * FROM Funcionarios ORDER BY nome;
-- 2
SELECT f.nome, f.sobrenome, t.telefone FROM Funcionarios f inner join Telefones t on f.matricula = t.matricula
-- 3
SELECT * FROM Veiculos where marca = 'Fiat' order by ano desc;
-- 4
SELECT count(veiculo_placa) as 'Manutenção por Veiculo', v.* FROM Veiculos v left join Manutencao m on v.placa = m.veiculo_placa
group by v.placa, v.modelo, v.marca, v.ano;

-- 5
drop view vw_totas_as_manutencoes;
create view  vw_totas_as_manutencoes as

SELECT m.*, concat(f.nome, ' ', f.sobrenome )AS' Funcionario', v.modelo FROM Manutencao m
INNER JOIN Funcionarios f ON m.matricula = f.matricula
INNER JOIN Veiculos v ON m.veiculo_placa = v.placa;
