  
// Sets Dependencies 

var express = require("express");
var bodyParser = require("body-parser");

// Sets the use for Express
var app = express();

/// Sets Port to either use port 3000 or a default port
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Sets HTML Routs and API Routs

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts our server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});