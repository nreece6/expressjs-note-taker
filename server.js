const express = require('express')
const html_routes = require('./routes/html-routes')
const api_routes = require('./routes/api-routes')
// heroku PORT setup
const PORT = process.env.PORT || 3001
// initialize app with express
const app = express()

//Middleware
app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(express.static('public'))
app.use(html_routes)
app.use(api_routes)

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})

