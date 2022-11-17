-- Hacemos LEFT JOIN de Customers y Orders usando CustomerId

SELECT `poo2022`.Customers.CustomerId, `poo2022`.Customers.CustomerName, `poo2022`.Orders.OrderId
FROM `poo2022`.Customers
LEFT JOIN `poo2022`.Orders ON `poo2022`.Customers.CustomerId = `poo2022`.Orders.CustomerId
ORDER BY `poo2022`.Customers.CustomerName DESC;