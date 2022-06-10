const assert = require('assert');
const { When, Then } = require('@cucumber/cucumber')


When('el empleado carga una hora valida', function(){

  //send hour
  this.backendSession.send({hourCreator: 4}, 'hours')

})

When('el empleado carga una hora invalida', function(){

  //send hour
  this.backendSession.send({}, 'hours')
})
