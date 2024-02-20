const initProd = require("./production")
const initCORS = require("./cors")
const initLogger = require("./logging")
const initRateLimit = require("./rate-limit")

module.exports = {
    initProd,
    initCORS,
    initLogger,
    initRateLimit
}