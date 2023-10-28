CREATE DATABASE IF NOT EXISTS Data;
USE Data;

CREATE TABLE `Data`.`t_users` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(255) NOT NULL,
  `userLastname` VARCHAR(255) NOT NULL,
  `userDob` DATE NOT NULL,
  `userMail` VARCHAR(255) NOT NULL,
  `userPassword` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idUser`));
