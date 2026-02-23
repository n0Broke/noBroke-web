CREATE DATABASE nobroke_web;

USE nobroke_web;

CREATE TABLE cargo(
id_cargo INT PRIMARY KEY AUTO_INCREMENT,
nome_cargo VARCHAR(45) NOT NULL,
descricao TEXT
) AUTO_INCREMENT = 500;

INSERT INTO cargo(nome_cargo) VALUES
('Analista de Infraestrutura'),
('Gestor de tecnologia'),
('Analista de Suporte');

SELECT * FROM cargo;

CREATE TABLE token(
id_token INT PRIMARY KEY AUTO_INCREMENT,
codigo CHAR(10),
fk_cargo INT,
FOREIGN KEY (fk_cargo) REFERENCES cargo(id_cargo)
) AUTO_INCREMENT = 1000;

insert into token values
(1000, 'randomerot', '501');

select * from token;

CREATE TABLE usuario(
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
email VARCHAR(80) UNIQUE NOT NULL,
senha VARCHAR(45),
ativo TINYINT(1),
data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
fk_adm INT NULL,
FOREIGN KEY (fk_adm) REFERENCES usuario(id_usuario),
fk_token INT UNIQUE,
FOREIGN KEY (fk_token) REFERENCES token(id_token)
);

select * from usuario;