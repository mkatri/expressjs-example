var express = require('express');
var bodyParser = require('body-parser');

var todoService = require('./services/todo.js');

var app = express();
app.use(bodyParser.json());

todoService.LinkApp(app);

var server = app.listen(8080, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Direct your browser to http://%s:%s', host, port);
});
