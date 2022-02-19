const express = require('express');
const app = express();

const port = 6979

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});