require('dotenv').config({path: __dirname + '/.env'})

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const CronJob = require('cron').CronJob

//This is configured with UTC. In Argentina will be
//17 PM.
const job = new CronJob('0 21 * * 1-5', () => {
    console.log("Notificando empleados...")
    require("./cron/notify_employees_by_email.js")
    console.log("Notificaciones enviadas...")
})

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use((req, res, next ) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'PUT, PATCH, POST, DELETE, GET, OPTIONS')
    next()
})

app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}))

const licenseRouter = require('./routes/licenses')
app.use('/licenses', licenseRouter)

const hourRouter = require('./routes/hours')
app.use('/hours', hourRouter)

const reportRouter = require('./routes/reports')
app.use('/reports', reportRouter)

const employeesRouter = require('./routes/employees')
app.use('/employees', employeesRouter)

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

console.log("Server listening...")
job.start()
app.listen(process.env.PORT || 5000, () => console.log('Server Started'))
