const express = require('express')
const router = express.Router()
const request = require('request')
const Hour = require('../models/hour')

function pick_employee_by_id(employees, id) {

  for (i = 0; i < employees.length; i++) {
    if (employees[i].legajo == id) {
      return employees[i]
    }
  }

  return undefined
}

router.get('/person/:id', async (req, res) => {
  try {

    request({ url: 'https://modulo-proyectos-psa-2022.herokuapp.com/projects', method: 'GET', json: true }, async (err, res2, body) => {
      employee_report = pick_employee_by_id(body, req.params.id)

      if (employee_report == undefined) {
        res.status(500).json({ message: "Employee doesn't exist" })
      }
      else {
        hour = await Hour.find({ hourAssignee: req.params.id })

        if (hour.length > 0) {
          result = hour.map(anHour => anHour.duration);
          number_of_hours_worked = result.reduce((previousHour, currentHour) => previousHour + currentHour, 0);

          if(!isNaN(number_of_hours_worked)){
            employee_report.total_hours_worked = number_of_hours_worked
          }
          else{
            employee_report.total_hours_worked = 0
          }

        }
        else {
          employee_report.total_hours_worked = 0
        }

        res.status(200).json(employee_report)
      }
    })

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/project/:id', async (req, res) => {
  try {
  
    request({ url: 'https://modulo-proyectos-psa-2022.herokuapp.com/projects', method: 'GET', json: true }, async (err, res2, body) => {
      
      // return the projects that have the worker id passed as parameter

      projects = body.filter(project => project._id == req.params.id)

      if (projects.length > 0) {
        res.status(200).json(projects)
      }
      else {
        res.status(500).json({ message: "Proyect doesn't exist" })
      }
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router