DROP DATABASE vendas_crud;
CREATE DATABASE vendas_crud;
USE vendas_crud;
CREATE TABLE venda(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome_produto VARCHAR(60) NOT NULL,
categoria VARCHAR(60) NOT NULL,
quantidade_vendida VARCHAR(60) NOT NULL,
valor_produto DECIMAL(10,2) NOT NULL,
data_venda DATE NOT NULL,
forma_pagamento VARCHAR(20) NOT NULL,
nome_vendedor VARCHAR(60) NOT NULL
);
