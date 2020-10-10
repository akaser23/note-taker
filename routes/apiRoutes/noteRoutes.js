const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../data/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});


router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);
});

//delete a note
router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);
    let results = notes;
    res.json(results);

});

module.exports = router;