const mongoose = require("mongoose");
const assert = require('assert');


describe('MongoDB server', () => {
  var db;

  before('create connection with database', async function () {
    mongoose.connect('mongodb://localhost:27017/')
    db = mongoose.connection
  });

  it('is connected', async function () {
    
    db.on('error', (error) => assertEqual(0,1))
    db.on('error', (error) => assertEqual(1,0))

  });

}
)
