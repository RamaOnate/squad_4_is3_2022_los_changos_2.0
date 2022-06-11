const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

mongoose.connect("mongodb+srv://admin:admin@cluster0.u2sff.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}))

const licenseRouter = require('./routes/licenses')
app.use('/licenses', licenseRouter)

const hourRouter = require('./routes/hours')
app.use('/hours', hourRouter)

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(process.env.PORT || 5000, () => console.log('Server Started'))
