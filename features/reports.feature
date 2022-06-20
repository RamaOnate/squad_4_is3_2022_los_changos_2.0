Feature: Reportes
  Los empleados pueden generar reportes por persona o proyecto

Scenario: Empleado genera un reporte de una persona existente
  Given un empleado ingresa a la aplicacion
  When el empleado genera un reporte de una persona
  Then la respuesta de la consulta de reporte es exitosa

Scenario: Empleado genera un reporte de una persona no existente
  Given un empleado ingresa a la aplicacion
  When el empleado genera un reporte de una persona no existente
  Then la respuesta de la consulta de reporte no es exitosa

Scenario: Empleado genera un reporte de un proyecto existente
  Given un empleado ingresa a la aplicacion
  When el empleado genera un reporte de horas de un proyecto existente
  Then la respuesta de la consulta de reporte es exitosa

Scenario: Empleado genera un reporte de un proyecto no existente
  Given un empleado ingresa a la aplicacion
  When el empleado genera un reporte de horas de un proyecto no existente
  Then la respuesta de la consulta de reporte no es exitosa
