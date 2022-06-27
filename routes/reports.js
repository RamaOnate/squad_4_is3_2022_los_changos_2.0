const express = require('express');
const router = express.Router();
const request = require('request');
const Hour = require('../models/hour');
const server_log = require('../utils/server_log');
const obj_to_xml = require('../utils/obj_to_xml');
const json2csv = require('json2csv').parse;

function pick_employee_by_id(employees, id) {

  for (i = 0; i < employees.length; i++) {
    if (employees[i].legajo == id) {
      return employees[i]
    }
  }

  return undefined
}

async function create_person_report(employee){
  var hour = await Hour.find({ hourAssignee: employee.legajo })

  employee_report = employee
  console.log(employee_report)

  if (hour.length > 0) {
    result = hour.map(anHour => anHour.duration);
    number_of_hours_worked = result.reduce((previousHour, currentHour) => previousHour + currentHour, 0);

    if (!isNaN(number_of_hours_worked)) {
      employee_report.total_hours_worked = number_of_hours_worked
    }
    else {
      employee_report.total_hours_worked = 0
    }

  }
  else {
    employee_report.total_hours_worked = 0
  }

  return employee_report
}

async function create_proyect_report(project){
  project_report = project
  project_report.total_hours_worked = 0
  tasks = project_report.tasks

  for(task_index = 0; task_index<tasks.length; task_index++){
    task_hours = 0
    hours = await Hour.find({ taskCode: tasks[task_index].code })
    hours.forEach(hour => task_hours = task_hours + hour.duration)
    project_report.total_hours_worked = project_report.total_hours_worked + task_hours
    project_report.tasks[task_index].hours_worked = task_hours          
  }

  return project_report
}

router.get('/person/:id', server_log, async (req, res) => {
  try {

    request({ url: process.env.RESOURCES_DATABASE, method: 'GET', json: true }, async (err, res2, body) => {
      employee_report = pick_employee_by_id(body, req.params.id)

      if (employee_report == undefined) {
        res.status(500).json({ message: "Employee doesn't exist" })
      }
      else {
        json_report = await create_person_report(employee_report)
        res.status(200).json(json_report)
      }
    })

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/person/file/csv/:id', server_log, async (req, res) => {
  try {

    request({ url: process.env.RESOURCES_DATABASE, method: 'GET', json: true }, async (err, res2, body) => {
      employee = pick_employee_by_id(body, req.params.id)

      if (employee == undefined) {
        res.status(500).json({ message: "Employee doesn't exist" })
      }
      else {
        json_report = await create_person_report(employee)
        res.attachment('filename.csv');
        res.status(200).send(json2csv(json_report));
      }
    })

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/project/:id', server_log, async (req, res) => {
  try {

    request({ url: 'https://modulo-proyectos-psa-2022.herokuapp.com/projects/withTasks', method: 'GET', json: true }, async (err, res2, body) => {

      // return the projects that have the worker id passed as parameter

      projects = body.filter(project => project.code == req.params.id)

      if (projects.length == 1) {
        json_report = await create_proyect_report(projects[0])
        res.status(200).json(json_report)
      }
      else {
        res.status(500).json({ message: "Project doesn't exist" })
      }
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/project/file/csv/:id', server_log, async (req, res) => {
  try {

    request({ url: 'https://modulo-proyectos-psa-2022.herokuapp.com/projects/withTasks', method: 'GET', json: true }, async (err, res2, body) => {

      // return the projects that have the worker id passed as parameter

      projects = body.filter(project => project.code == req.params.id)

      if (projects.length == 1) {
        json_report = await create_proyect_report(projects[0])
        res.attachment('report.csv');
        res.status(200).send(json2csv(json_report.tasks));
      }
      else {
        res.status(500).json({ message: "Project doesn't exist" })
      }
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router