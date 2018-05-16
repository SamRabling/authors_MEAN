const mongoose = require("mongoose");
const authors = require("../controllers/authors");

module.exports = function (app) {
    app.get("/authors", authors.index);
    app.post("/authors", authors.new);
    app.post("/authors/:id", authors.update);
    app.post("/authors/remove/:id", authors.remove);
}