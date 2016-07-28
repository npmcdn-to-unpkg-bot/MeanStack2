var Heroes = require('./models/hero');

function getHeroes(res) {
    Heroes.find(function(err, heroes) {
        res.set('Content-Type', 'application/json');
        res.set('Access-Control-Allow-Origin', '*');
        if (err) {
            res.send(err);
        }
        res.json(heroes);
    });
};

module.exports = function(app) {
    app.get('/api/heroes', function(req, res) {
        getHeroes(res);
    });

    app.post('/api/heroes', function(req, res) {
        res.set('Content-Type', 'application/json');
        res.set('Access-Control-Allow-Origin', '*');
        Heroes.create({
            id: req.body.id,
            name: req.body.name
        }, function(err, hero) {
            if (err)
                res.send(err);
            console.log(hero);
            getHeroes(res);
        });
    });
};
