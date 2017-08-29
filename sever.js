const express = require('express');

let app = express();

    console.log('home');
    app.get('/',(req, res) => {
        res.sendFile(__dirname + '/Menu.html');
    });
// console.log(__dirname);

app.use(express.static(__dirname  + './'));
app.get('/about', (req, res) => {
    res.sendFile( __dirname + '/About.html');
});
app.get('/file', (req, res) => {
    res.sendFile( __dirname + '/test.txt');
});
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname  + '/Style.css');
})

app.get('/about.css',(req, res) => {
    res.sendFile(__dirname + '/about.css')
})
app.listen(6969, () => {
    console.log('sever is uppp');
});