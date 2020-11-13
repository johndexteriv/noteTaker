var noteData = require("../db/db.json");

module.exports = function (app) {
	app.get("/api/notes", function (req, res) {
		res.json(noteData);
	});
	app.post("/api/notes", function (req, res) {
		var newNote = req.body;
		noteData.push(newNote);
		res.json(true);
	});
	// Work on DELETE route readme line 23
};
