const { When } = require('@cucumber/cucumber')

When('el empleado consulta una hora valida', function(){
    //create new hour
      this.backendSession.get(
        { hourCreator: 10, duration: 2, projectNumber: 5 },
        'hours'
      )
})
  

When('el empleado consulta una hora invalida', function(){
  //create new hour
    this.backendSession.get({}, 'hours')
})

