Feature: Licencias
  Los empleados de recursos quieren cargar, modificar y eliminar una licencia

Scenario: Empleado carga una licencia valida
  Given un empleado ingresa a la aplicacion
  When el empleado carga una licencia valida
  Then la respuesta de carga es exitosa

Scenario: Empleado carga una licencia invalida
  Given un empleado ingresa a la aplicacion
  When el empleado carga una licencia invalida
  Then la respuesta de carga no es exitosa

Scenario: Empleado consulta una licencia valida
  Given un empleado ingresa a la aplicacion
  When el empleado consulta una licencia valida
  Then la respuesta de la consulta es exitosa

Scenario: Empleado consulta una licencia invalida
  Given un empleado ingresa a la aplicacion
  When el empleado consulta una licencia invalida
  Then la respuesta de la consulta no es exitosa

Scenario: Empleado elimina una licencia valida
  Given un empleado ingresa a la aplicacion
  When el empleado elimina una licencia valida
  Then la respuesta de la eliminacion es exitosa

Scenario: Empleado elimina una licencia invalida
  Given un empleado ingresa a la aplicacion
  When el empleado elimina una licencia invalida
  Then la respuesta de la eliminacion no es exitosa

Scenario: Empleado realiza una modificacion valida de una licencia
  Given un empleado ingresa a la aplicacion
  When el empleado realiza una modificacion valida de una licencia
  Then la respuesta de la modificacion es exitosa

Scenario: Empleado realiza una modificacion invalida de una licencia
  Given un empleado ingresa a la aplicacion
  When el empleado realiza una modificacion invalida de una licencia
  Then la respuesta de la modificacion no es exitosa