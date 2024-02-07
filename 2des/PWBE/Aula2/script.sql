drop database if exists Escola;
create database Escola;
use Escola;

create table Turma(
    ID_Turma integer not null primary key auto_increment,
    Data_inicio date not null,
    Data_Fim date not null,
    Descricao varchar(50) not null
);


--RA integer not null,
-- foreign key (RA) references Alunos(RA)
create table Matriculas(
    ID_Matricula integer primary key not null auto_increment,
    Data_Matricula date not null,
    ID_Turma integer not null, 
    
    foreign key (ID_Turma) references Turma(ID_Turma)
   
);

-- Disciplina varchar(30) not null,
-- foreign key (Disciplina) references Disciplinas (Disciplina) 
create table Professores(
    ID_Professor integer not null primary key auto_increment,
    Nome varchar(100) not null,
    Tempo_De_Contrato varchar(20) not null
);

create table Disciplinas(
    Disciplina varchar(30) not null primary key,
    ID_Professor integer not null,
    ID_Turma integer not null,
    foreign key (ID_Professor) references Professores (ID_Professor),
    foreign key (ID_Turma) references Turma (ID_Turma)
);

create table Curso(
    ID_Curso integer not null primary key auto_increment,
    Nome_Do_Curso varchar(30) not null,
    Carga_Horaria varchar(30) not null, 
    Disciplina varchar(30) not null,
    foreign key (Disciplina) references Disciplinas (Disciplina)
);

create table Alunos(
    RA integer not null primary key auto_increment,
    CPF varchar(20) not null,
    Nome varchar(100) not null,
    Nome_Res varchar(100) not null, 
    Tel_Res varchar(20) not null,
    Endereco_CEP varchar(10) not null,
    Endereco_Num varchar(5),
    Endereco_Complemento varchar(50),
    Nascimento date not null,
    ID_Curso integer not null,
    ID_Turma integer not null,
    foreign key (ID_Curso) references Curso(ID_Curso),
    foreign key (ID_Turma) references Turma(ID_Turma)
);