const { When } = require('@cucumber/cucumber')

When('el empleado elimina una hora valida', function(){
    //create new hour
      this.backendSession.deleteNew(
        { hourCreator: 10, duration: 3, projectNumber: 5 },
        'hours'
      )
})
  
When('el empleado elimina una hora invalida', function(){
  //create new hour
    this.backendSession.deleteNew({}, 'hours')
})

