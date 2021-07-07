const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('publicStat'));
app.use(express.static('static'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, './about.html'))
})

app.get('/ajax', (req,res) => {
    res.sendFile(path.join(__dirname, './ajax.html'));
})

app.get('/api/v2/movies', (req,res) => {
    const movies = [
        {
            title: "Baveheart"
        },
        {
            title: "Glory"
        },
        {
            title: "Saving Private Ryan"
        }
    ]
    res.json(movies); 
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

