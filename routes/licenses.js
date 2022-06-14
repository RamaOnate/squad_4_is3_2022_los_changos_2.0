const express = require('express')
const router = express.Router()
const License = require('../models/license')

// Getting all licenses
router.get('/', async (req, res) => {
  try {
    const license = await License.find()
    res.json(license)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting one license
router.get('/:id', getLicense, (req, res) => {
  res.status(200).json(res.license)
})

// Adding a license
router.post('/', async (req, res) => {
    const license = new License({
      licensedPersonCode: req.body.licensedPersonCode,
        startingDate: req.body.startingDate,
        durationDays: req.body.durationDays,
    })
    try {
      const newLicense = await license.save()
      res.status(201).json(newLicense)
    } catch (err) {
      res.status(400).json({ message: err.message })
        
    }
})

// Deleting a license by id
router.delete('/:id', getLicense, async (req, res) => {
  
  try {
    await res.license.remove()
    res.json({ message: 'License deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Updating a license by id
router.patch('/:id', getLicense, async (req, res) => {
  if (req.body.licensedPerson != null) {
    res.license.startingDate = req.body.startingDate,
    res.license.durationDays = req.body.durationDays,
    res.license.approved = req.body.approved
  }
  try {
    const updatedLicense = await res.license.save()
    res.json(updatedLicense)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

async function getLicense(req, res, next) {
  let license
  
  try {
    license = await License.findById(req.params.id)
    if (license == null) {
      return res.status(404).json({ message: 'License unavailable' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.license = license
  next()
}

module.exports = router