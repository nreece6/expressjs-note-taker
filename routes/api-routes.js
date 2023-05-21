const router = require('express').Router()
const fs = require('fs')

router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
    res.json(dbJson);
  });


router.post('/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json","utf8"));
    const newNotes = {
      title: req.body.title,
      text: req.body.text,
      };
    dbJson.push(newNotes);
    fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
    res.json(dbJson);
  });
  


router.delete('/api/notes:id', (req, res) => {
    let data = fs.readFileSync('db/db.json', 'utf-8')
    const readData = JSON.parse(data)
    const notes = readData.filter((note) => {
        return note.id !== req.params.id
    })
    fs.writeFileSync('db/db.json', JSON.stringify(notes))
    res.json('Deleted note')
})

module.exports = router