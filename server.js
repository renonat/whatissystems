const express = require('express')
const app = express()
var path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile('index.html', { root: __dirname }))
app.get('/careers', (req, res) => res.sendFile('careers.component.html', { root: __dirname }))

app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(8080, () => console.log('Example app listening on port 8080!'))