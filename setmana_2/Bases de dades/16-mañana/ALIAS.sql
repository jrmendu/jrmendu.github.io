/* ALIAS */

-- Creamos alias y ordenamos DESC
SELECT Examen AS Nota FROM `poo2022`.Students
ORDER BY Nota DESC;

-- Ordenamos ASC por ALIAS Nota:
SELECT Examen AS Nota FROM `poo2022`.Students
ORDER BY Nota ASC;