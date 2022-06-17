const assert = require('assert');
const { When, Then } = require('@cucumber/cucumber')
const License = require('../../models/license')

Then('los datos de la persona se cargan', function(){
  result = this.backendSession.lastReport
})

Then('sale error de carga de datos', function(){
  result = this.backendSession.lastReport
})
