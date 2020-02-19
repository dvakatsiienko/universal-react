/* Core */
import express from 'express';

/* Instruments */
import { serverRender } from './renderers/server';
import config from './config.js';
import json from './data';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const initialContent = await serverRender();

    res.render('index', { ...initialContent });
});

app.get('/data', (req, res) => {
    res.send(json.data);
});

app.listen(config.port, function listenHandler() {
    console.info(`🚀 Running on ${config.port}...`);
});
