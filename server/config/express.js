import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import order from "../app/routes/order.route.js";
import payment from "../app/routes/payment.route.js";

export default () => {
  const app = express();

  app.set("trust proxy", true);

  // "limit" the option of bodyParser that controls the maximum request body size.
  app.use(
    bodyParser.urlencoded({
      extended: true,
      limit: "1mb",
    })
  );
  app.use(bodyParser.json({ limit: "1mb" }));

  // for a test /////
  app.use(cors());
  ///////////////////

  // Routing
  app.use("/order", order);
  app.use("/payment", payment);

  return app;
};
