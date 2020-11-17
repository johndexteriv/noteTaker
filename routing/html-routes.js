var path = require("path");
// Get routes that respond with notes.html and index.html file paths
module.exports = function (app) {
	app.get("/notes", function (req, res) {
		res.sendFile(path.join(__dirname + "/../public/notes.html"));
	});
	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname + "/../public/index.html"));
	});
};
