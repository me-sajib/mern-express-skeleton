const userRoutes = require("./user.routes");

const initRoutes = (app) => {
  app.use("/api/v1/user", userRoutes);
  // app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/test", (req, res) => res.send("Hello World!"));
};

module.exports = initRoutes;
