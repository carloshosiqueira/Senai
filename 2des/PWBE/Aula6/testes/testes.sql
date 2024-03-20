insert into Usuarios(nome, email, senha) values
('Takamassa Nomuro', 'takamassa@gmail.com', md5('123456')),
('Paula Tejano', 'paulatejano@gmail.com', md5('654321')),
('Deide Costa', 'deidecosta@gmail.com', md5('123456789'));

insert into Tarefas(descricao, dataDeVencimento, status, idUsuario) values

('Varrer a casa', date_add(now(),interval 2 hour), 'em andamento', 1),
('Capinar o quintal', date_add(now(),interval 8 hour), 'em andamento', 2),
('Dar banho no cachorro', date_add(now(),interval 1 hour), 'concluida', 2),
('Compra mensal do mercado', date_add(now(),interval 72 hour), 'a fazer', 3),
('Fazer comida', date_add(now(),interval 3 hour), 'em andamento', 3);