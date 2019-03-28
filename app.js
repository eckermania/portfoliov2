'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (request, response) => {
  response.sendFile('index.html', {root: './public'});
});

app.get('/', (request, response) => {
  response.sendFile('example1.html', {root: './public'});
});

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
