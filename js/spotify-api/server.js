//Simple file hoster
'use strict';
const express = require('express');
const fs = require('fs');
const port = 8080;
var app = express();

app.get(/.+/, (req, res) => {
  let path = __dirname + req.path;
  if (fs.existsSync(path)) {
    console.log(`[OK] Resource ${path} was requested by ${req.ip}. Sending...`);
    res.sendFile(path);
  } else {
    console.log(`[NOT FOUND] Invalid resource ${path} was requested by ${req.ip}. Sending 404...`);
    res.sendStatus(404);
  }
});

app.get('/', (req, res) => res.redirect('/index.html'));

app.listen(port, () => console.log('Listening on port', port));
