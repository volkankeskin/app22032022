const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')

const app = express()
app.use(bodyParser.json())

app.get('/api/hello', async (req, res) => {

    //const str = JSON.stringify(process.env) 
    //res.send(str)

    const sqlStr = process.env.MYSQLCONNSTR_myConn
    res.send('connection string: ' + sqlStr)
})

app.get('/api/merhaba', (req, res) => {

    res.send('Merhaba Dünyalı')
})

app.post('/api/name', (req, res) => {

    const body = _.pick(req.body, ['firstName','lastName'])
    console.log(body)
    res.send('Hello '+body.firstName+' '+body.lastName)
})

app.listen(8080, () => {
    console.log('app server is running')
})