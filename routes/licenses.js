const express = require('express')
const router = express.Router()
const License = require('../models/license')

// Getting all
router.get('/', async (req, res) => {
  try {
    const license = await License.find()
    res.json(license)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Adding a license
router.post('/', async (req, res) => {
    const license = new License({
        name: req.body.name
    })
    try {
        const newLicense = await license.save()
        res.status(201).json(newLicense)
        console.log(newLicense)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting a license by id
router.delete('/:id', getLicense, async (req, res) => {
  console.log("El id es: " + req.params.id)
  try {
    await res.license.remove()
    res.json({ message: 'License deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Updating a license by id
router.patch('/:id', getLicense, async (req, res) => {
  if (req.body.name != null) {
    res.license.name = req.body.name
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
  console.log(req.params.id)
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