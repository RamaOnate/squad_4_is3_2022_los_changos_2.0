Feature: Hours
  Los empleados de recursos quieren cargar, modificar y eliminar sus horas

Scenario: Empleado carga una hora valida
  Given un empleado ingresa a la aplicacion
  When el empleado carga una hora valida
  Then la respuesta de carga es exitosa

Scenario: Empleado carga una hora invalida
  Given un empleado ingresa a la aplicacion
  When el empleado carga una hora invalida
  Then la respuesta de carga no es exitosa

Scenario: Empleado consulta una hora valida
  Given un empleado ingresa a la aplicacion
  When el empleado consulta una hora valida
  Then la respuesta de la consulta es exitosa

Scenario: Empleado consulta una hora invalida
  Given un empleado ingresa a la aplicacion
  When el empleado consulta una hora invalida
  Then la respuesta de la consulta no es exitosa

Scenario: Empleado elimina una hora valida
  Given un empleado ingresa a la aplicacion
  When el empleado elimina una hora valida
  Then la respuesta de la eliminacion es exitosa

Scenario: Empleado elimina una hora invalida
  Given un empleado ingresa a la aplicacion
  When el empleado elimina una hora invalida
  Then la respuesta de la eliminacion no es exitosa

Scenario: Empleado realiza una modificacion valida de una hora
  Given un empleado ingresa a la aplicacion
  When el empleado realiza una modificacion valida de una hora
  Then la respuesta de la modificacion es exitosa

Scenario: Empleado realiza una modificacion invalida de una hora
  Given un empleado ingresa a la aplicacion
  When el empleado realiza una modificacion invalida de una hora
  Then la respuesta de la modificacion no es exitosa