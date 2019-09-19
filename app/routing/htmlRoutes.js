//Dependencies

var express = require("express");
var path = require("path");



/* **************************************************HTML ROUTES******************************************************* */

module.exports = app => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.get("/logic.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/logic.js"));
  });
  app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/style.css"));
  });
}

