Feature: Hours
  Los empleados pueden generar reportes por persona o proyecto

Scenario: Empleado genera un proyecto de una persona existente
  Given un empleado ingresa a la aplicacion
  When el empleado genera un reporte de una persona
  Then los datos de la persona se cargan

Scenario: Empleado genera un proyecto de una persona no registrada
  Given un empleado ingresa a la aplicacion
  When el empleado genera un reporte de una persona no registrada
  Then sale error de carga de datos
