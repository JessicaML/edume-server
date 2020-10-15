var express = require("express");
const cors = require("cors");
var app = express();

app.use(cors());
app.options("*", cors());

app.get("/", function(req, res) {
  res.send("Hello World!");
});

const server = app.listen(3001, function(){
  console.log("Example app listening on port 3001!");
}); 

module.exports = server;