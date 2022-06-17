const express = require('express')
const router = express.Router()
const request = require('request')
const Hour = require('../models/hour')

router.get('/person/:id', async (req, res) => {
  try {

    request({ url: process.env.RESOURCES_DATABASE, method: 'GET', json: true }, async (err, res2, body) => {
      hour = await Hour.find({hourAssignee:req.params.id})
      result = hour.map(anHour => anHour.duration);
      number_of_hours_worked = result.reduce((previousHour, currentHour) => previousHour + currentHour, 0);
      res.status(200).json({total_hours_worked: number_of_hours_worked})
    })

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router