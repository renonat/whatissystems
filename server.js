const express = require('express')
const app = express()
var favicon = require('serve-favicon');
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.use(favicon('public/favicon.ico'));

app.get('/', (req, res) => res.sendFile('public/index.html', { root: __dirname }))
app.get('/about', (req, res) => res.sendFile('public/about.html', { root: __dirname }))
app.get('/careers', (req, res) => res.sendFile('public/careers.html', { root: __dirname }))
app.get('/co-op', (req, res) => res.sendFile('public/co-op.html', { root: __dirname }))
app.get('/education', (req, res) => res.sendFile('public/education.html', { root: __dirname }))
app.get('/history', (req, res) => res.sendFile('public/history.html', { root: __dirname }))
app.get('/general-engineering', (req, res) => res.sendFile('public/general-engineering.html', { root: __dirname }))
app.get('/projects', (req, res) => res.sendFile('public/projects.html', { root: __dirname }))
app.get('/right-fit', (req, res) => res.sendFile('public/right-fit.html', { root: __dirname }))
app.get('/what-next', (req, res) => res.sendFile('public/what-next.html', { root: __dirname }))

app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(8080, () => console.log('Example app listening on port 8080!'))