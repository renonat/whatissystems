const express = require('express')
const app = express()
var favicon = require('serve-favicon');
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.use(favicon('public/favicon.ico'));

app.get('/', (req, res) => res.sendFile('public/html/homepage.html', { root: __dirname }))
app.get('/about', (req, res) => res.sendFile('public/html/about.html', { root: __dirname }))
app.get('/careers', (req, res) => res.sendFile('public/html/careers.html', { root: __dirname }))
app.get('/co-op', (req, res) => res.sendFile('public/html/co-op.html', { root: __dirname }))
app.get('/education', (req, res) => res.sendFile('public/html/education.html', { root: __dirname }))
app.get('/history', (req, res) => res.sendFile('public/html/history.html', { root: __dirname }))
app.get('/general-engineering', (req, res) => res.sendFile('public/html/general-engineering.html', { root: __dirname }))
app.get('/projects', (req, res) => res.sendFile('public/html/projects.html', { root: __dirname }))
app.get('/right-fit', (req, res) => res.sendFile('public/html/right-fit.html', { root: __dirname }))
app.get('/what-next', (req, res) => res.sendFile('public/html/what-next.html', { root: __dirname }))

app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(8080, () => console.log('Example app listening on port 8080!'))