let express = require("express");
let bp = require("body-parser");
let session = require("express-session");

let app = express();
app.use(
  session({
    secret: "mysecretestsecret",
    resave: false,
    saveUninitialized: true,
    cookie: {}
  })
);
// app.use(express.static(__dirname + '/public/dist'))

require("./server/config/mongoose");

app.listen(8000, function() {
  console.log("listening on port 8000 . . .");
});
