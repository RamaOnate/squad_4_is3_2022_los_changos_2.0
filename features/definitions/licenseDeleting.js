const assert = require('assert');
const { When, Then } = require('@cucumber/cucumber')

When('el empleado elimina una licencia valida', function(){
    //create new license
      this.backendSession.deleteNew(
        { licensedPersonCode: 10, startingDate: new Date(Date.now()), durationDays: 5 },
        'licenses'
      )
})
  


When('el empleado elimina una licencia invalida', function(){
  //create new license
    this.backendSession.deleteNew({}, 'licenses')
})

