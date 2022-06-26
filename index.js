const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const noteRouter = require('./routes/noteRoute')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res) => {
    res.send('server star')
})
app.use('/api/v1', noteRouter)


app.listen(5000, () => {
    console.log('server start............')
})