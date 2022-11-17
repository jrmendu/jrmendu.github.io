/* Ejercicios de SELECT */

/* db -> poo2022 */ 
/* Tabla -> Customers */

/* General */
SELECT COUNT(DISTINCT PostalCode) FROM `poo2022`.Customers;

/* Firefox - usa MS Access */
SELECT COUNT(*)
FROM (SELECT DISTINCT PostalCode FROM `poo2022`.Customers)
AS MiAlias;