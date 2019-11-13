/*
 * A very basic HTTP relay server using node.js.
 *
 * Thank you to @florton for doing the initial legwork.
 *
 * Inspired by http://blog.javascripting.com/2015/01/17/dont-hassle-with-cors/
 */
var express = require("express");
var request = require("request");
var app = express();

let token = "shippo_live_86a6e7f9c14602f48795458e72c63be61d5dc508";

var API_HOST = "https://api.goshippo.com/tracks/usps/9200190204994415838897"; // Put your actual API host here.

app.use("/", function(req, res) {
  var url = API_HOST + req.url;

  console.log("Connecting to service:", url);
  console.log("Using parameters:", req.query);
  res.header(
    "Authorization",
    "ShippoToken shippo_live_86a6e7f9c14602f48795458e72c63be61d5dc508"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

  req.pipe(request(url)).pipe(res);
});

console.log("Starting super-simple HTTP relay server...");
app.listen(process.env.PORT || 4001);
