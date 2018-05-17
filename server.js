const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.json());
app.use(express.static(__dirname + '/Angular/dist/Angular'));

//mongoose
require("./server/config/mongoose");
//routes
require("./server/config/routes.js")(app)
//angular routes
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./Angular/dist/Angular/index.html"))
});

//port
app.listen(5000, function () {
    console.log("listening on port 5000");
});