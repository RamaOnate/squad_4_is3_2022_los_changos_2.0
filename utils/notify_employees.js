require('dotenv').config({path: __dirname + '../../.env'})
const notify_employee = require('./utils/notify_employee')

function notify_employees(){


  // EMPLEADOS - EMPLEADOS_QUE_CARGARON -> EMPLEADO_QUE_NO_CARGARON. :)



  notify_employee({"legajo":1,"Nombre":"Mario","Apellido":"Mendoza"})
}

module.exports = notify_employees
