const express = require('express');
const morgan = require('morgan');

const app = express();

//view enginee
app.set('view engine', 'ejs');

//static files middleware - public css acess to browser
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


app.listen(3000, () => {
    console.log("listening for requests on 3000");
});



//routes
app.get('/home', (req, res) => {
    res.render('home',{title: 'Home Page'})
})
app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get("/about", (req, res) => {
    res.render("about", { title: 'About Us' });
});

app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact" });
});

app.get("/get-involved", (req, res) => {
    res.render("get-involved", { title: "Get Involved" });
});

app.get("/projects", (req, res) => {
    res.render("projects", { title: "Projects" });
});

app.get("/team", (req, res) => {
    res.render("team", { title: "Team" });
});

//____________________thank you  page rouuuuuuute______________


//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: 'Not Found' });
});


