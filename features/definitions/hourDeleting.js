const { When } = require('@cucumber/cucumber')

When('el empleado elimina una hora valida', function(){
    //create new hour
      this.backendSession.deleteNew(
        { hourAssignee: 10, duration: 3, taskCode: 5 },
        'hours'
      )
})
  
When('el empleado elimina una hora invalida', function(){
  //create new hour
    this.backendSession.deleteNew({}, 'hours')
})

