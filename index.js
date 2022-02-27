const
    functios  = require('./core/functions'),
    config    = require('config'),
    express   = require('express'),
    pug       = require('pug');

let app = express();
app.use(express.static(__dirname));
app.set('views', './app/template');
app.set('view engine', 'pug');

let appConf = config.get('app.connection');

app.get('/*', (res, req) => {
    req.render('home', {});
});

app.listen(appConf.port, appConf.host, (err) => {
    console.log(err);
});
