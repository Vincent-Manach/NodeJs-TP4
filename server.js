const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

app.get('/hello-world', (req, res) => {
    let jsonMessage = res.json({ "message": "Hello world"});
    res.send(jsonMessage);
})

app.get('/message', (req, res) => {
    if (req.query.message.length < 20) {
        res.send(`${req.query.message}`);
    } else {
        res.status(400).json({ message: "Bad request"})
    }
});

app.post('/info/headers', (req, res) => {
    let headers = res.json(req.headers)
    res.send(headers)
})

app.post('/payload', (req, res) => {
    console.log(req.query.birthdate)
    res.send(req.query.params)
    let dateNow = new Date();
    let dob = new Date(req.query.birthdate)
    let dateDiff = dateNow - dob;
    if (dateDiff >= 18) {
        res.status(200).json({ message: "Welcome :firstname"})
    } else {
        res.status(403).json({ message: "Forbidden"})
    }
})

app.get('/rick-roll', (req, res) => {
    res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
})

app.delete('/custom-header', (req, res) => {
    res.set('Message', 'Hello world !').send()
})

app.get('/params/:id/:key/:slug', (req, res) => {
    res.send(req.params)
})

app.listen(3000)