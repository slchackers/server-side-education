var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var app = express();

app.get('/',function(request,response){
	response.send(ReactDOMServer.renderToString(React.createElement('div',null,'test')));
});

app.listen(3000);
