//require('dotenv').config({path: __dirname + '/../.env'})
const notify_employee = require('../utils/notify_employee')
const HourModel = require('../models/hour')
const request = require('request')
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

//https://flaviocopes.com/how-to-determine-date-is-today-javascript/
const isToday = (someDate) => {
  const today = new Date()
  return someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
}

const hourOfToday = (document) => {
  return isToday(document.created)
}

const employeeLoadedHour = (employee, hours) => {
  for(let i = 0; i < hours.length; i++){ 

    if(hours[i].hourAssignee == employee.legajo){
      return true
    }
  }

  return false

}

const options = {
  url: process.env.RESOURCES_DATABASE,
  method: 'GET',
  json: true,
}

request(options, async (err, res, body) => {
  if(res != undefined){
    try{
      var employees = body;
      var hours_loaded = await HourModel.find({}).exec();
      var hours_loaded_today = hours_loaded.filter(hourOfToday);

      for(let i = 0; i < employees.length; i++){ 
        if(!employeeLoadedHour(employees[i], hours_loaded_today)){notify_employee(employees[i])}
      }
    } catch (error) {
        console.log(error)
    }
  }
})
