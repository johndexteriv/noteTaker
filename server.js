const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;
var path = require("path");

// require("./routing/api-routes.js")(app);
// require("./routing/html-routes.js")(app);

app.listen(PORT, function () {
	console.log("APP LISTENING ON PORT: " + PORT);
});
