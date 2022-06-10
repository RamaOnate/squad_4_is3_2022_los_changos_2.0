const { Given } = require('@cucumber/cucumber')
const BackendSession = require('../backendSession');

Given('un empleado ingresa a la aplicacion', function () {
  this.backendSession = new BackendSession ("localhost", 3000)
})
