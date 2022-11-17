INSERT INTO `poo2022`.`Orders` (`OrderId`, `CustomerId`, `OrderDate`) VALUES ('1000','2', '02-11-2022');
INSERT INTO `poo2022`.`Orders` (`CustomerId`, `OrderDate`) VALUES ('4', '05-11-2022');
INSERT INTO `poo2022`.`Orders` (`CustomerId`, `OrderDate`) VALUES ('7', '10-11-2022');
INSERT INTO `poo2022`.`Orders` (`CustomerId`, `OrderDate`) VALUES ('5', '03-11-2022');

-- UPDATE
INSERT INTO `poo2022`.`Orders` (`CustomerId`) VALUES ('11');

-- Después de ALTER TABLE
UPDATE `poo2022`.`Orders` SET `EmployeeId` = '10', `ShipperId` = '123' WHERE (`OrderId` = '1000');
UPDATE `poo2022`.`Orders` SET `EmployeeId` = '40', `ShipperId` = '345' WHERE (`OrderId` = '1001');
UPDATE `poo2022`.`Orders` SET `EmployeeId` = '55', `ShipperId` = '234' WHERE (`OrderId` = '1002');
UPDATE `poo2022`.`Orders` SET `EmployeeId` = '33', `ShipperId` = '109' WHERE (`OrderId` = '1003');
UPDATE `poo2022`.`Orders` SET `EmployeeId` = '76', `ShipperId` = '451' WHERE (`OrderId` = '1004');
