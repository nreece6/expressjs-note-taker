const router = require('express').Router()
const fs = require('fs')

router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

router.post('/', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'))
    const { title, text} = req.body
    if (title && text) {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
        }
        dbJson.push(newNote)
        fs.writeFileSync('db/db.json', JSON.stringify(dbJson))
        res.json(dbJson)
    }
})

module.exports = router