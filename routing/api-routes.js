const noteData = require("../db/db.json");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

module.exports = function (app) {
	app.get("/api/notes", function (req, res) {
		// respond w/ file in following __dirname ../db/db.json
		res.sendFile(path.join(__dirname, "../db/db.json"));
	});
	app.post("/api/notes", function (req, res) {
		// sets a new note variable to request body and adds unique id via uuid npm package
		var newNote = req.body;
		newNote.id = uuidv4();
		// Read file db.json parse data and then push new note
		fs.readFile("./db/db.json", "utf8", (err, data) => {
			if (err) throw err;
			const allTheNotes = JSON.parse(data);
			allTheNotes.push(newNote);
			// Write db.json with new note included
			fs.writeFile(
				"./db/db.json",
				JSON.stringify(allTheNotes, null, 2),
				(err) => {
					if (err) throw err;
					res.json(noteData);
					console.log("note has been created");
				}
			);
		});
	});
	// Delete function that targets the notes unquie id
	app.delete("/api/notes/:id", function (req, res) {
		// Assigns a variable to remove notes based off the id
		var noteToRemove = req.params.id;
		// Read db.json parse data and create a new array of notes without "noteToRemove"
		fs.readFile("./db/db.json", "utf8", (err, data) => {
			if (err) throw err;
			const allTheNotes = JSON.parse(data);
			const notesNotDeleted = allTheNotes.filter(
				(note) => note.id != noteToRemove
			);
			// Write db.json with the notes not deleted array.
			fs.writeFile(
				"./db/db.json",
				JSON.stringify(notesNotDeleted, null, 2),
				(err) => {
					if (err) throw err;
					res.json(noteData);
					console.log("note has been removed");
				}
			);
		});
	});
};
