let mongoose = require("mongoose");
let Bike = mongoose.model("bike");

module.exports = {
  // index to test with postman
  index: function(req, res) {
    Bike.find({}, function(err, bikes) {
      if (err) {
        return res.json(err);
      }
      return res.json(bikes);
    });
  },

  // Create a bike => sends to DB <= newly created bike
  create: function(req, res) {
    Bike.create(req.body, function(err, bike) {
      if (err) {
        return res.json(err);
      }

      User.findByIdAndUpdate(
        req.body.user,
        { $push: { bikes: bike._id } },
        { new: true },
        function(err, user) {
          if (err) {
            return res.json(err);
          }
          return res.json(bike);
        }
      );
    });
  },

  // Update a bike => sends to db <= bike updated
  update: function(req, res) {
    Bike.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
      function(err, bike) {
        if (err) {
          return res.json(err);
        }
        return res.json(bike);
      }
    );
  },

  // Destroy a bike => db
  destroy: function(req, res) {
    Bike.findByIdAndRemove(req.param.id, function(err, bike) {
      if (err) {
        return res.json(err);
      }
      return res.json(bike);
    });
  }
};
