const express = require('express');
const app = express();

app.use(express.static('docs'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html');
});

let port = process.env.PORT;
port == null || port == "" ? port = 3000 : null;
app.listen(port, (req, res) => {console.log(`Server running on port ${port}`)});