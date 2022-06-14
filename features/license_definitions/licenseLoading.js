const assert = require('assert');
const { When, Then } = require('@cucumber/cucumber')

When('el empleado consulta una licencia valida', function(){
    //create new license
      this.backendSession.get(
        { licensedPersonCode: 10, startingDate: new Date(Date.now()), durationDays: 5 },
        'licenses'
      )
})
  
When('el empleado consulta una licencia invalida', function(){
  //create new license
    this.backendSession.get({}, 'licenses')
})

