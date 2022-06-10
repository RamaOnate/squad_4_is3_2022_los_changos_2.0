const assert = require('assert');
const { When, Then } = require('@cucumber/cucumber')
const License = require('../../models/license')

When('el empleado carga una licencia valida', function(){

  //send license
  this.backendSession.send({licensedPerson: 4}, 'licenses')

})

When('el empleado carga una licencia invalida', function(){

  //create new license
  let license = new License({})

  //send license
  this.backendSession.send(license, 'licenses')
})
