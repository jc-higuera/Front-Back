var express = require('express');
var router = express.Router();
const Mongolib = require("../db/Mongolib");

/* GET home page. */
router.get('/', function (req, res, next) {
    Mongolib.getDatabase(db => {
        Mongolib.findDocuments(db, docs => {
            res.send(docs);
        })
    })
});

router.post('/', function(req, res) {
    const newOffer = {
      name: req.body.name,
      company: req.body.company,
      salary: req.body.salary,
      city: req.body.city
    };
    Mongolib.getDatabase(db => {
        Mongolib.createDocument(db, newOffer);
    })
});

module.exports = router;