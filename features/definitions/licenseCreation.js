const { When } = require('@cucumber/cucumber')
const License = require('../../models/license')

When('el empleado genera un reporte de una persona', function(){

  //send license
  this.backendSession.send({licensedPersonCode: 4}, 'licenses')

})

When('el empleado genera un reporte de una persona no registrada', function(){

  //create new license
  let license = new License({})

  //send license
  this.backendSession.send(license, 'licenses')
})
