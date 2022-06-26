const generator = require('../utils/generate')
const memStorage = require('../utils/memory.storage')
const noteModel = require('../model/note.model')
exports.getAllNotes = (req, res) => {
    // var new_id_1 = generator.generate();
    // memStorage.store.setItem(new_id_1, '1st-key')
    // var new_id_2 = generator.generate();
    // memStorage.store.setItem(new_id_2, '2st-key')
    var keys = memStorage.getKeys(memStorage.store)
    var values = memStorage.getValues(memStorage.store)

    res.status(201).send(JSON.stringify(values))
}
exports.savaNote = (req, res) => {
    var new_id_1 = generator.generate();
    var createBy = 'admin'
    var createOn = new Date()
    var title = req.body.title
    var content = req.body.content
    if (!title || !content) {
        return res.status(500).send({ error: "title and content must be mandatary" })
    }
    const note = noteModel.note
    const note1 = new note(new_id_1, title, content, createBy, createOn)
    memStorage.store.setItem(new_id_1, note1)

    res.status(201).send("successfully")
    console.log(memStorage.getValues(memStorage.store))
}
exports.updataNote = (req, res) => {
    var new_id_1 = req.body.noteId;
    var createBy = 'admin'
    var createOn = new Date()
    var title = req.body.title
    var content = req.body.content
    if (!new_id_1) {
        return res.status(500).send({ message: 'id must be exist' })
    }
    if (!title || !content) {
        return res.status(500).send({ error: "title and content must be mandatary" })
    }
    var noteItem = memStorage.store.getItem(new_id_1)
    if (!noteItem) {
        return res.status(500).send({ erroe: 'this note not found' })
    }

    const note = noteModel.note
    const note1 = new note(new_id_1, title, content, createBy, createOn)
    memStorage.store.setItem(new_id_1, note1)

    res.status(200).send("successfully note is updated")
    console.log(memStorage.getValues(memStorage.store))
}
exports.deleteNote = (req, res) => {
    var noteId = req.params.noteId
    if (!noteId) {
        return res.status(500).send({ error: "this id not found" })

    }
    var noteItem = memStorage.store.getItem(noteId)
    if (!noteItem) {
        return res.status(500).send({ error: "this note not found" })
    }
    memStorage.store.removeItem(noteId)
    console.log(memStorage.getValues(memStorage.store))
    return res.status(200).send("thid note " + noteItem + ' is deleted')
}