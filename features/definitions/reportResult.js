const assert = require('assert');
const { When, Then } = require('@cucumber/cucumber')
const License = require('../../models/license')

Then('los datos de la persona se cargan', function(){

  //send license
  this.backendSession.send({licensedPersonCode: 4}, 'licenses')

})

Then('sale error de carga de datos', function(){

  //create new license
  let license = new License({})

  //send license
  this.backendSession.send(license, 'licenses')
})
