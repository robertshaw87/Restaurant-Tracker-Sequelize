var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function (req, res) {
    db.Restaurant.findAll({order: [["name", "ASC"]]}).then(function (data) {
        res.render("index", {restaurants : data});
    });
});

router.post("/api/restaurants", function (req, res) {
    console.log(req.body)
    db.Restaurant.create(req.body).then(function (response)  {
        res.redirect("/");
    });
});

router.put("/api/restaurants/:id", function (req, res) {
    var update = req.body;
    update.visited = (update.visited == "true");
    update.liked = (update.liked == "true");
    db.Restaurant.update(req.body, {where: {id: req.params.id}}).then(function (response) {
        if (response.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/restaurants/:id", function (req, res) {
    db.Restaurant.destroy({where: {id: req.params.id}}).then(function (response) {
        if (response.affectedRows == 0) {
            // If no rows were deleted, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router