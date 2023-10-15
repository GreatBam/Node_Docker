CREATE DATABASE IF NOT EXISTS Data;
USE Data;

CREATE TABLE `Data`.`t_users` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(255) NOT NULL,
  `userLastname` VARCHAR(255) NOT NULL,
  `userDob` DATE NOT NULL,
  PRIMARY KEY (`idUser`));

INSERT INTO t_users (idUser, userName, userLastname, userDob)
VALUES (1, 'Jonathan', 'Gabioud', '1987-12-28');