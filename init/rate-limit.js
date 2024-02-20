const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minitues
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
    message: "Too many requests from this IP, please try again after an hour"
})

const initRateLimit = app => app.use(limiter);

module.exports = initRateLimit;