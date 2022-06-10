const { When } = require('@cucumber/cucumber')

When('el empleado realiza una modificacion valida de una hora', function(){

  //send hour
  this.backendSession.modify(
    {hourCreator: 4, duration: 5}, 
    {hourCreator: 4, duration: 7},
    'hours')
})

When('el empleado realiza una modificacion invalida de una hora', function(){

  //send hour
  this.backendSession.modify({}, {}, 'hours')
})
