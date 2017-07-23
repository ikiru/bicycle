let path = require("path");
let Users = require("./../controllers/users");
let Bikes = require("./../controllers/bikes");

module.exports = function(app) {
  // User  routing
  app.get("/users", Users.index);
  app.post("/users", Users.create);
  app.get("/user/:id", Users.show);
  app.delete("/users/:id", Users.logout);

  // Session routing
  app.get("/session", Users.session);
  app.post("/session", Users.authenticate);

  // bike routing
  app.get("/bike", Bikes.index);
  app.post("/bike", Bikes.create);
  app.patch("/bike/:id", Bikes.update);
  app.delete("/bike/:id", Bikes.destroy);

  // Path to the Angular Routing
  app.all("*", function(req, res, next) {
    res.sendFile(path.resolve("./public/dist/index.html"));
  });
};
