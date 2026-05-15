const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.engine("hbs", handlebars.engine({extname: '.hbs'}));
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, 'resources\\views'));
app.get("/", (req, res) => {
    res.render("home");
});
app.get("/news", (req, res) => {
    res.render("news");
});
app.listen(3000, () => {
    console.log("Server chạy tại http://localhost:3000");
});