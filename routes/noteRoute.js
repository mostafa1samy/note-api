const express = require('express')
const noteController = require('../controllers/noteController')


const router = express.Router()



router.get('/notes', noteController.getAllNotes)
router.post('/notes/sava', noteController.savaNote)
router.put('/notes/updata', noteController.updataNote)
router.delete('/notes/delete/:noteId', noteController.deleteNote)


module.exports = router