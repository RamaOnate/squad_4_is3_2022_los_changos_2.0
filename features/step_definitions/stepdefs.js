const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber')
const License = require('../../models/license')
const BackendSession = require('../../features/backendSession');

Given('un empleado ingresa a la aplicacion', function () {
  this.backendSession = new BackendSession ("localhost", 3000)
})

When('el empleado carga una licencia valida', function(){

  //create new license
  let license = new License({
    name: "Roberto"
  })

  //send license
  this.backendSession.sendLicense(license)
})

Then('la respuesta es exitosa', function(){
  // assert status code returned is 201
  
  // sleep 10 seconds
  setTimeout(() => {
    assert.equal(this.backendSession.statusCode, 201)
  }, 2500);

})

When('el empleado carga una licencia invalida', function(){

  //create new license
  let license = new License({})

  //send license
  this.backendSession.sendLicense(license)
})

Then('la respuesta no es exitosa', function(){
  // assert status code returned is 201
  
  // sleep 10 seconds
  setTimeout(() => {
    assert.equal(this.backendSession.statusCode, 400)
  }, 2500);

})

