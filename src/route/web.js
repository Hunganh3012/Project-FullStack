import express from "express";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/',(req,res) =>{
        return res.send('Hello world with Hùng Anh')
    })
    return app.user("/", router);
    // về sau sẽ sử dụng : return app.user("/v1/api", router);
};

module.exports = initWebRoutes;
