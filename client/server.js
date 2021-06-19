const { createServer } = require('http');
const next = require('next');

const app = next ({
    dev: process.env.Node_ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.prepare().then(() => {
    createServer(handler).listen(3000, err => {
    // createServer(handler).listen(port,host, err => {
        if (err) throw err;
        console.log("Ready on localhost:3000"); 
    })
})