const mongoose = require("mongoose");


describe('MongoDB server', () => {
  var db;

  before('create connection with database', async function () {
    mongoose.connect(process.env.DATABASE_URL)
    db = mongoose.connection
  });

  it('is connected', async function () {
    db.on('error', (error) => assertEqual(0,1))
    db.on('on', () => assertEqual(1,1))
  });

  after('Finish Testing', () => {
    process.exit(0);
  });

}
)
