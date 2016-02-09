import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import main from './text-entry';
import { run } from '@cycle/core';
import { makeHTMLDriver } from '@cycle/dom';

const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 5000;

const app = express();
app.engine('handlebars', handlebars({
    layoutsDir: path.join(__dirname, './views/layouts'),
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));

// Static assets
app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', function(req, res) {
});

// Cycle.run main function
// const main = ({ DOM }) => ({ DOM: textArea(DOM) });
// create mock DOM driver
const DOM = makeHTMLDriver();

app.get('/counter', (req, res, next) => {
    run(main, { DOM })
        .sources.DOM
        .forEach(ssr => {
            res.render('app', {app: ssr});
        }, next);
});

app.listen(port, () => {
    console.info('==> ✅  Server is listening');
    console.info('==> 🌎  Go to http://%s:%s', hostname, port);
});
