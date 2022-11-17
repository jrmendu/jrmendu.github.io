/* DIFERENTES TAULES PER PRACTICAR */
/* PRODUCTS TABLE */
CREATE TABLE `poo2022`.`Products` (
  `ProductId` INT NOT NULL AUTO_INCREMENT,
  `ProductName` VARCHAR(100) NOT NULL,
  `SupplierId` INT NOT NULL,
  `CategoryId` INT NOT NULL,
  `Unit` VARCHAR(100) NOT NULL,
  `Price` DECIMAL(6,2) NOT NULL,
  PRIMARY KEY (`ProductId`));

/* CUSTOMERS TABLE */
  CREATE TABLE `poo2022`.`Customers` (
  `CustomerID` INT NOT NULL AUTO_INCREMENT,
  `CustomerName` VARCHAR(50) NOT NULL,
  `ContactName` VARCHAR(100) NOT NULL,
  `Address` VARCHAR(200) NOT NULL,
  `City` VARCHAR(50) NOT NULL,
  `PostalCode` VARCHAR(50) NOT NULL,
  `Country` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`CustomerID`));

/* ORDERS TABLE */
CREATE TABLE `poo2022`.`Orders` ( 
 `OrderId` INT NOT NULL AUTO_INCREMENT, 
 `CustomerId` INT NOT NULL, 
`OrderDate` VARCHAR(10) NULL DEFAULT '01-11-2022', 
 PRIMARY KEY (`OrderId`));

 /* EMPLOYEES TABLE */
 CREATE TABLE `poo2022`.'Employees' (
    `EmployeeId` INT NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(50) NOT NULL,
    `LastName` VARCHAR(50) NOT NULL,
    `BirthDate` VARCHAR(45) NULL DEFAULT '01-01-2000',
    `Photo` VARCHAR(45) NULL DEFAULT 'profile.jpg',
    `Bio` VARCHAR(500) NULL,
    PRIMARY KEY (`EmployeeId`));
 
 /* SHIPPERS TABLE */ 
 CREATE TABLE `poo2022`.`Shippers`(
    `ShippersId` INT NOT NULL AUTO_INCREMENT,
    `ShipperName`VARCHAR (100) NOT NULL,
    `Phone` VARCHAR(20) NULL DEFAULT '(+1) 123-456-789' 
    COMMENT 'Tabla de Empresas de Entrega de Paquetes'
    PRIMARY KEY (`ShippersId`));

 /* STUDENTS TABLE */ 
 CREATE TABLE `poo2022`.`Students` (
    `StudentsId` INT NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR (50) NULL DEFAULT 'Alumno',
    `Examen` DECIMAL(3,2) NULL DEFAULT 1,
    PRIMARY KEY (`StudentsId`));

ALTER TABLE `poo2022`.`Students`
ADD COLUMN `Fecha`VARCHAR(50) NOT NULL DEFAULT '01-11-2022' 
COMMENT 'Usamos formato de dd-mm-aaaa' AFTER `Examen`;

/* CATEGORIES TABLE */
CREATE TABLE `poo2022`.`Categories` (
  `CategoryId` INT NOT NULL AUTO_INCREMENT,
  `CategoryName` VARCHAR(50) NOT NULL,
  `Description` VARCHAR(200) NULL DEFAULT 'Descripción' 
  COMMENT 'Tabla de Categorías de Productos',
  PRIMARY KEY 

