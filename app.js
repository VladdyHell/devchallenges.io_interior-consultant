const express = require('express');
const app = express();

app.use(express.static('docs'));

app.get(['/', '/home', '/collection', '/about', '/contact'], (req, res) => {
    res.sendFile(__dirname + '/docs/index.html');
});

let port = process.env.PORT;
port == null || port == "" ? port = 3000 : null;
app.listen(port, (req, res) => {console.log(`Server running on port ${port}`)});