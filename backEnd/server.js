const express = require('express');
let app = express();
const dataBase = require('./dataBase');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = 1140;

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});
