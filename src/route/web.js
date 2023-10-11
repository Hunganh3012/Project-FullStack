import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);

    //rest api

    return app.use("/", router);
    // về sau sẽ sử dụng : return app.user("/v1/api", router);
};

module.exports = initWebRoutes;
