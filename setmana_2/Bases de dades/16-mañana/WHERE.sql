/* Ejercicios con WHERE */

/* Filtramos usuarios con el valor 'Argentina' en Country */
SELECT * FROM `poo2022`.Customers 
WHERE Country='Argentina';

/* Seleccionando solo algunas columnas */
SELECT CustomerName, Address, PostalCode FROM `poo2022`.Customers 
WHERE Country='Argentina';

/* Country = 'España' */
SELECT * FROM `poo2022`.Customers 
WHERE Country='España';

