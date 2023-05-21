const express = require('express')
const html_routes = require('./routes/html-routes')
const api_routes = require('./routes/api-routes')
// heroku PORT setup
// process.env.PORT ||
const PORT = 3001
// initialize app with express
const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/', html_routes)
app.use('/api', api_routes)

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})

