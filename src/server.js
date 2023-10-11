import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
require("dotenv").config();

// Nêu sau này làm cái api muốn lấy /user?id=7 thì bodyparser thì lmaf chuyện đó

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

//require("dotenv").config(); để chạy được dòng ở dưới
let port = process.env.PORT || 6969; // if port === undefiend => port =6969;

app.listen(port, () => {
    //callback
    console.log("Backend NodeJs is running on the port" + port);
});
