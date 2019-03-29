var express = require('express');
var router = express.Router();
var HeroCollection = require('../models/heroModel');


/* GET home page. */
router.get('/', function (req, res, next) {
    HeroCollection.find({}, (error, results) =>
        res.render('index', {allEntries: results}));
});


router.route('/add')
    .get(function (req, res) {
        res.render('add');
    })

    .post(function (req, res) {
        HeroCollection.create(
            {
                id: req.body.id,
                name: req.body.name,
                intelligence: req.body.intelligence,
                strength: req.body.strength,
                speed: req.body.speed,
                combat: req.body.combat,
                wealth: req.body.wealth,
                image: req.body.image
            }, (errors) => {
                if (errors) res.send(errors);
                else res.render('add')
            });

    });


router.route('/delete')

    .post(function (req, res) {
        HeroCollection.deleteOne({id: req.body.id},
            (error) => {
                if (error) res.send(error);
                else res.render('delete');
            })


            .get(function (req, res) {
                res.render('delete')
            })
    });

// router.get('/edit',(req, res)=>{
//     HeroCollection.updateOne({id:req.query.id},{
//         name: req.query.name,
//         intelligence: req.query.intelligence,
//         strength: req.query.strength,
//         speed: req.query.speed,
//         combat: req.query.combat,
//         wealth: req.query.wealth,
//         image: req.query.image
//     },(error)=>{if(error)res.render('edit')})
// });

// router.get('/editChange',(req, res)=>{
//     res.send('editChange')
// });

router.get('/error', (req, res) => {
    res.render('error')
});

router.get('/find', (req, res) => {
    HeroCollection.find({id: req.query.id},
        (error, results) => {
            if (error) res.render('error');
            else res.render('find', {findResults: results})
        });
});


module.exports = router;
