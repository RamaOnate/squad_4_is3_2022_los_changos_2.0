const { Given } = require('@cucumber/cucumber')
const BackendSession = require('../BackendSession');

Given('un empleado ingresa a la aplicacion', function () {
  this.backendSession = new BackendSession ("localhost", 5000)
})
