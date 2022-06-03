const { Pool } = require('pg');
const assert = require('assert');


describe('postgresSQL server', () => {
  let pool;

  before('Mock db connection and load app', async function () {
    pool = new Pool({
      database: 'postgres',
      user: 'postgres',
      password: 'postgres',
      host: 'localhost',
      port: 5432,
    })    
  })

  it('should return the result of "SELECT NOW()"', () => {
    pool.query("SELECT NOW()").then(response=>{console.log(response);assert.equal(response.rowCount, 1);});
  });

  after('Finish Testing', () => {
    process.exit(0);
  });

 });
