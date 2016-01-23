var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var path = require('path');
var Component = React.createFactory(require('./component'));
var app = express();

app.set('view engine','ejs');

app.get('/',function(request,response){
	var htmlDOM = React.DOM.div(null,Component());
	response.render(path.join(__dirname,'index.ejs'),{reactContent:ReactDOMServer.renderToString(htmlDOM)});
})

app.get('/component-web.js',function(request,response){
	response.sendFile(path.join(__dirname,'component-web.js'));
});

app.listen(3000);
