create databse treinamento;

use treinamento

create table pessoas(
    id integer primary key auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(30) not null,
    sobrenome varchar(30) not null,
    idade varchar(2) not null,
    genero varchar (9) not null
);
describe pessoas;

insert into pessoas(cpf, nome, sobrenome, idade, genero) 
values
("123.456.789-01", "Oscar", "Alho", "15", "Masculino"),
("234.567.890-12", "Sugiro", "Kimimame", "35", "Masculino"),
("345.678.901-23", "Jacinto", "Pinto", "21", "Masculino"),
("456.789.012-34", "Deide", "Costa", "69", "Feminino"),
("567.890.123-45", "Takamassa", "Nomuro", "19", "Masculino")

select * from pessoas;