const { spawn } = require('child_process');
const got = require('got');
const test = require('tape');

const env = Object.assign({}, process.env, {PORT: 5000});
const child = spawn('node', ['index.js'], {env});

const { Client } = require('pg')


test('connects to postgres server', () => {
  const client = new Client({
    user: 'postgres',
    password: 'postgres',
    port: 5432,
  })
  client.connect()
});
