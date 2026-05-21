const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

const route = require("./routes");
//routes init
route(app);

app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("hbs", handlebars.engine({extname: '.hbs'}));
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, 'resources\\views'));



app.listen(3000, () => {
    console.log("Server chạy tại http://localhost:3000");
});