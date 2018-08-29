// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Route Files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// // Basic route that sends the user first to the AJAX Page
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "public/home.html"));
//   });
  
  
//   app.get("/survey", function (req, res) {
//     res.sendFile(path.join(__dirname, "public/survey.html"));
//   });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
