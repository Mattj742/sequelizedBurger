var express = require("express");
var router = express.Router();
var path = require("path");
var db = require("../models");


router.get("/", function(req, res) {
    db.burger.findAll({}).then(function(data) {
        var hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
        return data;
    });
});

router.post("/", function(req, res) {
    db.burger.create({
        burger_name: req.body.burger_name
    }).then(function(dbBurgers) {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    db.burger.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(dbBurgers) {
        res.redirect("/");
    });
});

module.exports = router;
