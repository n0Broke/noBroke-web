CREATE DATABASE nobroke_web;
USE nobroke_web;

CREATE TABLE empresa(
id_empresa INT PRIMARY KEY AUTO_INCREMENT,
nome_empresa VARCHAR(80) NOT NULL,
cnpj CHAR(14) UNIQUE NOT NULL,
data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
) AUTO_INCREMENT = 2000;

CREATE TABLE usuario(
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
email VARCHAR(60) UNIQUE NOT NULL,
senha VARCHAR(45) NOT NULL,
cpf CHAR(11) NOT NULL,
ativo TINYINT,
nivel_acesso VARCHAR(45),
CONSTRAINT chk_nivel_acesso CHECK (nivel_acesso IN('ADMIN', 'FUNCIONARIO')),
fk_adm INT NULL,
FOREIGN KEY (fk_adm) REFERENCES usuario(id_usuario),
fk_empresa INT,
FOREIGN KEY (fk_empresa) REFERENCES empresa(id_empresa)
);

CREATE TABLE servidor(
id_servidor INT PRIMARY KEY AUTO_INCREMENT,
cpu INT,
ram INT,
disco INT,
fk_empresa INT,
FOREIGN KEY (fk_empresa) REFERENCES empresa(id_empresa)
);
