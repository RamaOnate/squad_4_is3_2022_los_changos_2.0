const express = require('express')
const router = express.Router()
const request = require('request')

// Getting all employees
router.get('/', async (req, res) => {
  try {
    const options = {
      url: process.env.RESOURCES_DATABASE,
      method: 'GET',
      json: true,
    }

    request(options, (err, res2, body) => {res.status(200).json(body)})

  }catch (err) {
    res.status(500).json({ message: err.message })
  }

})

module.exports = router
