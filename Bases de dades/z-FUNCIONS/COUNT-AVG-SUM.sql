/* COUNT, AVG, SUM */

-- Añadimos estas entradas en la tabla Products
INSERT INTO `poo2022`.`Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Taza de Navidad', '4', '7', 'Taza x1', '3.99');
INSERT INTO `poo2022`.`Products` (`ProductName`, `SupplierId`, `CategoryId`, `Unit`, `Price`) VALUES ('Ponche navideño', '6', '7', 'Botella 1L', '7.99');
UPDATE `poo2022`.`Products` SET `CategoryId` = '7' WHERE (`ProductId` = '3');
-- ^^^ Ejecutar ^^^ 

-- COUNT

-- Número de Productos con Id mayor (estricto) que 5:
SELECT COUNT(Price) 
FROM `poo2022`.Products
WHERE ProductId > 5;

-- Número de clientes que son de España:
SELECT COUNT(Country) 
FROM `poo2022`.Customers
WHERE Country LIKE '%España%';

-- Creamos tabla Students --

-- Una forma de "contar" cuántos alumnos se han presentado al examen:
SELECT COUNT(Examen) 
FROM `poo2022`.Students
WHERE Examen > 1 ;

-- Originalmente tenemos un 6.2 de media
SELECT AVG(Examen) 
FROM `poo2022`.Students
WHERE Examen > 1 ;

-- Cambiamos una nota:
UPDATE `poo2022`.`Students` SET `Examen` = '7.50' WHERE (`StudentsId` = '2');

-- Recalculamos la media (sin WHERE se aplica a todos):
SELECT AVG(Examen) 
FROM `poo2022`.Students; -- Obtenemos un 6.7

-- SUM
SELECT SUM(Examen) 
FROM `poo2022`.Students; -- 33.50

-- COUNT
SELECT COUNT(Examen) 
FROM `poo2022`.Students; -- 5

-- 33.50 / 5 = 6.7 -> Normalmente, toca hacerlo en servidor