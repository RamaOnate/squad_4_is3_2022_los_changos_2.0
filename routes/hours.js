const express = require('express')
const router = express.Router()
const Hour = require('../models/hour')
const request = require('request')

// Getting all hours
router.get('/', async (req, res) => {
  try {
    const hour = await Hour.find()
    res.json(hour)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting one hour
router.get('/:id', getHour, (req, res) => {

  request({ url: 'https://modulo-proyectos-psa-2022.herokuapp.com/tasks', method: 'GET', json: true }, (err, res2, body) => {
    selected_task = body.filter(task => task.code == res.hour.taskCode)
    if(selected_task.length == 0){
      res.hour.task = "Task not available"
    }
    else{
      res.hour.task = selected_task[0]
    }
    delete res.hour.taskCode
    res.json(res.hour)
  })
})

// Adding an hour
router.post('/', async (req, res) => {
    console.log(req.body)
    const hour = new Hour({
      hourAssignee: req.body.hourAssignee,
      startingDate: req.body.startingDate,
      duration: req.body.duration,
      taskCode: req.body.taskCode
    })

    try {
        const newHour = await hour.save()

        res.status(201).json(newHour)

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Adding an hour
router.post('/filterByDate', async (req, res) => {

  try {

      const hours = await Hour.find({
        hourAssignee: req.body.hourAssignee,
        startingDate: {
          $gte: req.body.startDate,
          $lte: req.body.finalDate}
        })

      request({ url: 'https://modulo-proyectos-psa-2022.herokuapp.com/tasks', method: 'GET', json: true }, (err, res2, body) => {
        
        for(i=0; i < hours.length; i++){
          selected_task = body.filter(task => task.code == hours[i].taskCode)
          hours[i] = hours[i].toObject()
          if(selected_task.length == 0){
            hours[i].task = "Task not available"
          }
          else{
            hours[i].task = selected_task[0]
          }
          delete hours[i].taskCode
        }

        res.status(201).json(hours)
      })    

  } catch (err) {
      res.status(400).json({ message: err.message })
  }
})

// Deleting an hour by id
router.delete('/:id', getHour, async (req, res) => {

  try {
    await res.hour.remove()
    
    res.json({ message: 'Hour deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Updating an hour by id
router.patch('/:id', getHour, async (req, res) => {
  if (req.body.name != null) {
    res.hour.name = req.body.name
  }
  try {
    const updatedHour = await res.hour.save()
    res.json(updatedHour)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

async function getHour(req, res, next) {
  let hour
  try {
    hour = await Hour.findById(req.params.id)
    if (hour == null) {
      return res.status(404).json({ message: 'Hour unavailable' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.hour = hour.toObject()
  next()
}


module.exports = router