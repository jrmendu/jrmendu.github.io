/* MIN y MAX */

-- Buscamos el mínimo del precio en Products
SELECT MIN(Price) 
FROM `poo2022`.Products; -- 1.00 // café para llevar

-- Buscamos el máximo del precio en Products
SELECT MAX(Price) 
FROM `poo2022`.Products; -- 49.99 // árbol de Navidad

SELECT MIN(ProductName) 
FROM `poo2022`.Products; -- Devuelve 'Árbol de Navidad'

SELECT MAX(Price) 
FROM `poo2022`.Products; -- Devuelve 'Tomates'

-- Se puede filtrar con WHERE:
SELECT MIN(Price) 
FROM `poo2022`.Products
WHERE ProductId > 1;