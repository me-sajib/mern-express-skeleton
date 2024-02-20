const express = require("express");
const bodyParser = require("body-parser");
const winston = require("winston");
const initRoutes = require("./routes");
const { initProd, initCORS, initLogger, initRateLimit } = require("./init");

const app = express();
const port = process.env.PORT || 3900;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initProd(app)
initCORS(app)
initLogger();
initRateLimit(app);


initRoutes(app);


app.listen(port, () => winston.info(`Listening on port ${port}`));
