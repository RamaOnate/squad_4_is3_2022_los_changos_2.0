const express = require('express')
const router = express.Router()
const Hour = require('../models/hour')

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
  res.json(res.hour)
})

// Adding an hour
router.post('/', async (req, res) => {
    const hour = new Hour({
        hourCreator: req.body.hourCreator,
        startingHour: req.body.startingHour,
        duration: req.body.duration,
        projectNumber: req.body.projectNumber,
        taskNumber: req.body.taskNumber
    })
    try {
        const newHour = await hour.save()
        res.status(201).json(newHour)
        
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

  res.hour = hour
  next()
}

module.exports = router