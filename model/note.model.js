exports.note = class Note {
    constructor(noteId, title, content, createBy, createOn) {
        this.noteId = noteId,
            this.title = title,
            this.content = content,
            this.createBy = createBy,
            this.createOn = createOn
    }
}