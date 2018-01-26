require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , session = require('express-session')
    , massive = require('massive')
    , controller = require('./controllers')


const app = express()

app.use(cors())

app.use(bodyParser.json())

massive(process.env.DB_CONNECTION).then((db)=>{
    app.set('db', db)
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false
}))
app.use(express.static(__dirname + '/../build'))

app.post('/api/postbody', controller.postBody)
app.get('/api/getbody', controller.getBody)
app.put('/api/putbody', controller.putBody)
app.delete('/api/deletebody/:id', controller.deleteBody)

app.listen(process.env.SERVER_PORT, () => { console.log('(0)_(0)') })