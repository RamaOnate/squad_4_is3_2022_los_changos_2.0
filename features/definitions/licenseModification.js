const { When } = require('@cucumber/cucumber')

When('el empleado realiza una modificacion valida de una licencia', function(){

  //send license
  this.backendSession.modify(
    {licensedPersonCode: 4, durationDays: 5}, 
    {licensedPersonCode: 4, durationDays: 7},
    'licenses')

})


When('el empleado realiza una modificacion invalida de una licencia', function(){

  //send license
  this.backendSession.modify({}, {}, 'licenses')
})

