const assert = require('assert');
const { Then } = require('@cucumber/cucumber')

Then('la respuesta de carga es exitosa', function () {
  // assert status code returned is 201

  setTimeout(() => {
    assert.equal(this.backendSession.statusCode, 201)
  }, 2500)

})

Then('la respuesta de carga no es exitosa', function () {
  // assert status code returned is 201

  setTimeout(() => {
    assert.equal(this.backendSession.statusCode, 400)
  }, 2500)

})

Then('la respuesta de la eliminacion es exitosa', function () {
  // assert status code returned is 200

  setTimeout(() => {
    assert.equal(this.backendSession.statusCode, 200)
  }, 2500);

})

Then('la respuesta de la eliminacion no es exitosa', function () {
  // assert status code returned is 400

  setTimeout(() => {
    assert.equal(this.backendSession.statusCode, 400)
  }, 2500);

})

Then('la respuesta de la consulta es exitosa', function () {
  // assert status code returned is 200

  setTimeout(() => {
    assert.equal(this.backendSession.statusCode, 200)
  }, 2500);

})

Then('la respuesta de la consulta no es exitosa', function () {
  // assert status code returned is 400

  setTimeout(() => {
    assert.equal(this.backendSession.statusCode, 400)
  }, 2500);

})

Then('la respuesta de la consulta de reporte es exitosa', function () {
  // assert status code returned is 200

  setTimeout(() => {
    assert.equal(this.backendSession.statusCode, 200)
  }, 2500);

})

Then('la respuesta de la consulta de reporte no es exitosa', function () {
  // assert status code returned is 400

  setTimeout(() => {
    assert.equal(this.backendSession.statusCode, 400)
  }, 2500);

})

Then('la respuesta de la modificacion es exitosa', function () {
  // assert status code returned is 201

  setTimeout(() => {
    assert.equal(this.backendSession.statusCode, 200)
  }, 2500)

})

Then('la respuesta de la modificacion no es exitosa', function () {
  // assert status code returned is 201

  setTimeout(() => {
    assert.equal(this.backendSession.statusCode, 400)
  }, 2500)

})
