const express = require('express');
const app = express();
const path = require('path');
const JOBS = require('./job')
const mustacheExpress = require('mustache-express');
console.log(JOBS)


app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());


app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
   // res.sendFile(path.join(__dirname, 'pages/index.html'));
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on https://localhost:${port}`);
});