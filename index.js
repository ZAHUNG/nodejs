const express = require("express");

const app = express();

app.get("/trang-chuuu1", (req, res) => {
    res.send("Server Node.js đang chạysdasdsadasasasa");
});

app.listen(3000, () => {
    console.log("Server chạy tại http://localhost:3000");
});