CREATE DATABASE burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(350) NOT NULL,
devoured BOOLEAN DEFAULT false,
date TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);
