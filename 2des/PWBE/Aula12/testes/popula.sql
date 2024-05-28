use escola;
insert into turma values
(1,"Desenvolvimento de Sistemas Segundo Semestre","2DES"),
(2,"Desenvolvimento de Sistemas Primeiro Semestre Integrado JULIA","1DES"),
(3,"Eletrônica Primeiro Semestre","1EM"),
(4,"Mecatrônica Primeiro Semestre","1MEC");

insert into aluno values
("RA0335","Adauto Martins","2000-03-01",1),
("RA0336","Maria Moreno","2000-03-13",1),
("RA0337","Passos Dias Aguiar","2000-02-05",1),
("RA0338","Juliana Lemos","2002-10-06",1),
("RA0339","Jacinto Penna","2006-11-16",1),
("RA0340","Juliana Lemos","2004-05-15",1),
("RA0341","Fábio Silva Martins","2000-03-01",2),
("RA0342","Albertina Moreno","2008-03-13",2),
("RA0343","Alexandre Aguiar","2005-02-05",2),
("RA0344","Patrícia Oliveira","2002-10-11",2),
("RA0345","José Roberto Garcia","2003-11-26",3),
("RA0346","Sílvia Mattos","2004-05-11",3);

insert into professor values
(1,"Reenye","Fazer ficha"),
(2,"Lucas","Pataquadas"),
(3,"Robson","Front-End"),
(4,"Wellington","Comer coxinha da Beth"),
(5,"Luiz",null);

insert into leciona(idProf,idTurma) values
(3,1),
(4,1),
(1,3),
(1,1),
(2,2),
(3,2),
(5,4);