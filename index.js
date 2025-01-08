const express = require("express");
var cors = require("cors");
const http = require('http');

const app = express();
app.use(express.json({ limit: "500mb", extended: true }));
app.use(express.urlencoded({ limit: "500mb", extended: true }));


const port =  4000;

app.use(cors());
const server = http.createServer(app);

module.exports.Server = server;

server.listen(port, async (req, res) => {
      console.log(`Listening on ${port}`);
  });