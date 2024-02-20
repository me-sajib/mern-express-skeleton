const helmet = require('helmet');
const compression = require('compression');

// Initialise compression and add security headers
module.exports = function initProd(app) {
  if (process.env.NODE_ENV === "production") {
    app.use(helmet());
    app.use(compression());
  }
}
