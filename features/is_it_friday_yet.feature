Feature: Licencias
  Los empleados de recursos quieren cargar, modificar y eliminar una licencia

Scenario: Empleado carga una licencia valida
  Given un empleado ingresa a la aplicacion
  When el empleado carga una licencia valida
  Then la respuesta es exitosa

Scenario: Empleado carga una licencia invalida
  Given un empleado ingresa a la aplicacion
  When el empleado carga una licencia invalida
  Then la respuesta no es exitosa
