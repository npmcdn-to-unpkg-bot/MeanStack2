var Heroes = require('./models/hero');

function getHeroes(res) {
    Heroes.find(function(err, heroes) {
        if (err) {
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

    app.post('/api/heroes', function(req, res, next) {
        Heroes.create({
            id: req.body.id,
            name: req.body.name
        }, function(err, hero) {
            if (err)
                res.send(err);
            res.json(hero);
        });
    });
};
