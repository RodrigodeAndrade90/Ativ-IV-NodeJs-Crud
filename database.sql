CREATE DATABASE IF NOT EXISTS crud;

USE crud;

CREATE TABLE IF NOT EXISTS comprador (
	buyer_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    buyer_nome  VARCHAR (40),
    buyer_idade INT,
    buyer_uf VARCHAR (2)
);

CREATE TABLE IF NOT EXISTS pedido (
	buy_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    buy_nome VARCHAR (40),
    buy_preco FLOAT,
    buy_categoria VARCHAR (20)
);