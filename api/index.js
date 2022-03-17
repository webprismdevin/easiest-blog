const express = require('express')
const app = express();
const path = require('path');
const port = 3000;

app.use(
    express.static(path.join(__dirname,'../public/')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/post/:slug', (req, res) => {
    res.sendFile(path.join(__dirname, '../post.html'))
})

app.listen(port, () => console.log(`listening on port ${port}`) );

module.exports = app;