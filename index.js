require('dotenv').config({path: __dirname + '/.env'})

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const notify_employee = require('./utils/notify_employee')
const CronJob = require('cron').CronJob

//Every day at 18:00, employees that did not upload hours will be notified
const job = new CronJob('0 18 * * *', () => { 
    notify_employee({"legajo":1,"Nombre":"Mario","Apellido":"Mendoza"})
}
)

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
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

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

job.start()
console.log("Server listening...")
app.listen(process.env.PORT || 5000, () => console.log('Server Started'))