/* DIFERENTES TAULES PER PRACTICAR */

/* 1.- PRODUCTS TABLE */
CREATE TABLE `poo2022`.`Products` (
  `ProductId` INT NOT NULL AUTO_INCREMENT,
  `ProductName` VARCHAR(100) NOT NULL,
  `SupplierId` INT NOT NULL,
  `CategoryId` INT NOT NULL,
  `Unit` VARCHAR(100) NOT NULL,
  `Price` DECIMAL(6,2) NOT NULL,
  PRIMARY KEY (`ProductId`));

/* 2.- CUSTOMERS TABLE */
  CREATE TABLE `poo2022`.`Customers` (
  `CustomerID` INT NOT NULL AUTO_INCREMENT,
  `CustomerName` VARCHAR(50) NOT NULL,
  `ContactName` VARCHAR(100) NOT NULL,
  `Address` VARCHAR(200) NOT NULL,
  `City` VARCHAR(50) NOT NULL,
  `PostalCode` VARCHAR(50) NOT NULL,
  `Country` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`CustomerID`));

/* 3.- ORDERS TABLE */
CREATE TABLE `poo2022`.`Orders` ( 
 `OrderId` INT NOT NULL AUTO_INCREMENT, 
 `CustomerId` INT NOT NULL, 
`OrderDate` VARCHAR(10) NULL DEFAULT '01-11-2022', 
 PRIMARY KEY (`OrderId`));

 /* 4.- ORDER DETAILS TABLE */
 CREATE TABLE `poo2022`.`OrderDetails` (
  `OrderDetailId` INT NOT NULL AUTO_INCREMENT,
  `OrderId` INT NOT NULL,
  `ProductId` INT NOT NULL,
  `Quantity` INT NULL DEFAULT 1 COMMENT 'Unidades del producto (int)',
  PRIMARY KEY (`OrderDetailId`));

 /* 5.- EMPLOYEES TABLE */
 CREATE TABLE `poo2022`.`Employees` (
    `EmployeeId` INT NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(50) NOT NULL,
    `LastName` VARCHAR(50) NOT NULL,
    `BirthDate` VARCHAR(45) NULL DEFAULT '01-01-2000',
    `Photo` VARCHAR(45) NULL DEFAULT 'profile.jpg',
    `Bio` VARCHAR(500) NULL,
    PRIMARY KEY (`EmployeeId`));
 
 /* 6.- SHIPPERS TABLE */ 
 CREATE TABLE `poo2022`.`Shippers`(
    `ShipperId` INT NOT NULL AUTO_INCREMENT,
    `ShipperName` VARCHAR (100) NOT NULL,
    `Phone` VARCHAR(20) NULL DEFAULT '(+1) 123-456-789' 
    COMMENT 'Tabla de Empresas de Entrega de Paquetes',
    PRIMARY KEY (`ShipperId`));

 /* 7.- STUDENTS TABLE */ 
 CREATE TABLE `poo2022`.`Students` (
    `StudentsId` INT NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR (50) NULL DEFAULT 'Alumno',
    `Examen` DECIMAL(3,2) NULL DEFAULT 1,
    PRIMARY KEY (`StudentsId`));

ALTER TABLE `poo2022`.`Students`
ADD COLUMN `Fecha`VARCHAR(50) NOT NULL DEFAULT '01-11-2022' 
COMMENT 'Usamos formato de dd-mm-aaaa' AFTER `Examen`;

/* 8.- CATEGORIES TABLE */
CREATE TABLE `poo2022`.`Categories` (
  `CategoryId` INT NOT NULL AUTO_INCREMENT,
  `CategoryName` VARCHAR(50) NOT NULL,
  `Description` VARCHAR(200) NULL DEFAULT 'Descripción' 
  COMMENT 'Tabla de Categorías de Productos',
  PRIMARY KEY (`CategoryId`));

/* 9.- SUPPLIERS TABLE */
CREATE TABLE `poo2022`.`Suppliers` (
  `SupplierId` INT NOT NULL AUTO_INCREMENT,
  `SupplierName` VARCHAR(100) NOT NULL DEFAULT 'Supplier',
  `ContactName` VARCHAR(100) NOT NULL DEFAULT 'Persona de Contacto',
  `Address` VARCHAR(100) NOT NULL DEFAULT 'Default address',
  `City` VARCHAR(30) NOT NULL DEFAULT 'Default city',
  `PostalCode` VARCHAR(20) NOT NULL DEFAULT '00001',
  `Country` VARCHAR(30) NOT NULL DEFAULT 'Default country',
  `Phone` VARCHAR(20) NOT NULL DEFAULT '+1 123 456 789',
  PRIMARY KEY (`SupplierId`));

/* 10.- SUPPLIERS TABLE */
CREATE TABLE `ProductsForOrders` (
  `ProductId` INT NOT NULL AUTO_INCREMENT,
  `ProductName` VARCHAR(100) NOT NULL DEFAULT 'Default Product',
  `UnitPrice` DECIMAL(6,2) NOT NULL DEFAULT 0,
  `UnitsInStock` INT NOT NULL DEFAULT 0,
  `UnitsOnOrder` INT NULL,
  PRIMARY KEY (`ProductId`));
