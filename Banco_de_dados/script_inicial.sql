CREATE DATABASE nobroke_web;

USE nobroke_web;

CREATE TABLE cargo(
id_cargo INT PRIMARY KEY AUTO_INCREMENT,
nome_cargo VARCHAR(45) NOT NULL,
descricao TEXT
);

CREATE TABLE usuario(
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
email VARCHAR(80) UNIQUE NOT NULL,
senha VARCHAR(45),
ativo TINYINT DEFAULT (1),
data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
fk_cargo INT,
fk_adm INT NULL,
FOREIGN KEY (fk_cargo) REFERENCES cargo(id_cargo),
FOREIGN KEY (fk_adm) REFERENCES usuario(id_usuario)
);

CREATE TABLE token(
id_token INT PRIMARY KEY AUTO_INCREMENT,
codigo INT UNIQUE,
fk_usuario INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
);