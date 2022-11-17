/* INNER JOIN */

-- 2 tablas
SELECT `poo2022`.Orders.OrderId, `poo2022`.Customers.CustomerName, Orders.OrderDate
FROM `poo2022`.Orders
INNER JOIN `poo2022`.Customers ON `poo2022`.Orders.CustomerId=`poo2022`.Customers.CustomerId;

-- 3 tablas
SELECT `poo2022`.Orders.OrderId, `poo2022`.Customers.CustomerName, `poo2022`.Customers.CustomerId,`poo2022`.Shippers.ShipperName, `poo2022`.Shippers.ShipperId
FROM ((`poo2022`.Orders
INNER JOIN `poo2022`.Customers ON `poo2022`.Orders.CustomerId = `poo2022`.Customers.CustomerId)
INNER JOIN `poo2022`.Shippers ON `poo2022`.Orders.ShipperId = `poo2022`.Shippers.ShipperId);