const cors = require('cors');

module.exports = initCORS = (app) => {
    app.use(cors(
        {
            origin: [`https://${process.env.HOST}`, `http://${process.env.HOST}`, `${process.env.HOST}`],
            methods: ["GET", "POST", "PUT", "PATCH", "OPTIONS", "DELETE"],
            credentials: true
        }
    ))
}
