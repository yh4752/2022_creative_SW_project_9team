import express from "express";
import {
  lift,
  sub_busy,
  money,
  sub_arrive,
  subway,
} from "../controllers/funcsController.js";

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  return res.render("index");
});

indexRouter.get("/lift", lift);
indexRouter.get("/sub_busy", sub_busy);
indexRouter.get("/money", money);
indexRouter.get("/sub_arrive", sub_arrive);
indexRouter.get("/subway", subway);

export default indexRouter;
