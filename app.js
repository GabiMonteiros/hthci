const express = require('express');


const app = express();

//view enginee
//app.set('view engine', 'ejs');
app.listen(3000, () => {
    console.log("listening for requests on 3000");
});

//routes
app.get('/', (req, res) => {
    res.sendFile('./views/home', { root:__dirname});
});

app.get("/about", (req, res) => {
    res.sendFile("./views/about", { root: __dirname });
});



