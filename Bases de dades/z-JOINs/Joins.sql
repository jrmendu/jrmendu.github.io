/* Ejemplos de JOIN */

-- Usamos al columna en común de Customers y Orders para asociar pedidos (orders) a clientes (customers):
SELECT `poo2022`.Orders.OrderId, `poo2022`.Customers.CustomerName, Orders.OrderDate
FROM `poo2022`.Orders
INNER JOIN `poo2022`.Customers ON `poo2022`.Orders.CustomerId=`poo2022`.Customers.CustomerId;