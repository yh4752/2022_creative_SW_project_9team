import express from "express";
import indexRouter from "./routers/indexRouter.js";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";

const app = express();

const port = process.env.PORT || 3400;

app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", indexRouter);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${port} 🚀`);

app.listen(port, handleListening);
