const assert = require('assert');
const { When, Then } = require('@cucumber/cucumber')
const License = require('../../models/license')

When('el empleado carga una licencia valida', function(){
  this.backendSession.get({employeeId: 20}, 'reports')
})

When('el empleado carga una licencia invalida', function(){
  this.backendSession.get({employeeId: 99}, 'reports')
})
