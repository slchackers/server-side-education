var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var path = require('path');
var handlebars = require('express-handlebars');

var app = express();

app.engine('handlebars',handlebars());
app.set('view engine','handlebars');

app.get('/',function(request,response){
	var htmlDOM = React.DOM.div(null,'test');
	response.render(path.join(__dirname,'index.handlebars'),{reactContent:ReactDOMServer.renderToString(htmlDOM)});
})

app.listen(3000);
