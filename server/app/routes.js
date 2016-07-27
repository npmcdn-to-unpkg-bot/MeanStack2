var Heroes = require('./models/hero');

function getHeroes(res) {
    Heroes.find(function (err, heroes) {
        if (err) {
            res.send(err);
        }
        res.json(heroes);
    });
};

module.exports = function (app) {
    app.get('/api/heroes', function (req, res) {
        getHeroes(res);
    });
};
