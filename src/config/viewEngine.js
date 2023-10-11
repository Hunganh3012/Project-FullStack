import express from "express";

//cấu hình dự án
let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs") //tương tự jsp( của java),blade( của PHP) for if else
    app.set("views", "./src/views")
    
};

module.exports = configViewEngine;
