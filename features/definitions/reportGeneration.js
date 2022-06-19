const { When } = require('@cucumber/cucumber')

When('el empleado genera un reporte de una persona', function(){
  this.backendSession.get({}, 'reports/person/3')
})

When('el empleado genera un reporte de una persona no existente', function(){
  this.backendSession.get({}, 'reports/person/100')
})

When('el empleado genera un reporte de horas de un proyecto existente', function(){
  this.backendSession.get({}, 'reports/proyect/8')
})

When('el empleado genera un reporte de horas de un proyecto no existente', function(){
  this.backendSession.get({}, 'reports/proyect/9')
})
