const { When } = require('@cucumber/cucumber')


When('el empleado carga una hora valida', function(){

  //send hour
  this.backendSession.send({hourAssignee: 4}, 'hours')

})

When('el empleado carga una hora invalida', function(){

  //send hour
  this.backendSession.send({}, 'hours')
})
