var path = require("path");

module.exports = function (app) {

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "./../public/home.html"));
    });

    app.get("/contact-me", function (req, res) {
        res.sendFile(path.join(__dirname, "./../public/contact.html"));
    });

    app.get("/portfolio", function (req, res) {
        res.sendFile(path.join(__dirname, "./../public/portfolio.html"));
    });

    app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "./../public/home.html"));
    });

};