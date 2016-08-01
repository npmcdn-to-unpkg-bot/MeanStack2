var Heroes = require('./models/hero');
var path = require("path");

function getHeroes(res) {
    Heroes.find(function(err, heroes) {
        if (err) {
            res.send(err);
        }
        res.json(heroes);
    });
};

function getHeroDetail(id, res) {
    Heroes.findOne( {id : id}, function(err, hero) {
        if (err) {
            res.send(err);
        }
        res.json(hero);
    });
};

function searchHero(search_term, res){
    Heroes.find(
      { $text : { $search : search_term } },
      {score : { $meta : "textScore" } }
    )
    .sort({ score : { $meta : "textScore"} })
    .exec( function(err, heroes){
      if(err){
        res.send(err);
      }
      res.json(heroes);
    });
};

module.exports = function(app) {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/api/heroes', function(req, res, next) {
        getHeroes(res);
    });

    app.get('/api/heroes/detail/:id', function(req, res, next) {
      if(req.params.id){
        getHeroDetail(req.params.id, res);
      }
    });

    app.get('/api/heroes/:search_term', function(req, res, next) {
      if(req.params.search_term){
        searchHero(req.params.search_term, res);
      }
    });

    app.post('/api/heroes', function(req, res, next) {
        Heroes.create({
            id: req.body.id,
            name: req.body.name,
            address : req.body.address
        }, function(err, hero) {
            if (err)
                res.send(err);
            res.json(hero);
        });
    });

    app.get('*', function (req, res) {
       res.sendFile(path.join(__dirname, '../../', '/client/index.html')); // load the single view file (angular will handle the page changes on the front-end)
   });
};
