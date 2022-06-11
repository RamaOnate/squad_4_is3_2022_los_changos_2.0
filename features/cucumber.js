const {Before} = require('@cucumber/cucumber');
const { spawn } = require('child_process');

Before({name: "[CUCUMBER] Start Server..."}, function () {
    spawn('node', ['index.js']);
});

module.exports = {
    default: `--format-options '{"snippetInterface": "synchronous"}'`
}
