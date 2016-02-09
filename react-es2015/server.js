import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Component} from './src/component';
import handlebars from 'express-handlebars';
import path from 'path';

const app = express();

app.engine('handlebars',handlebars());
app.set('view engine','handlebars');

app.get('/',(request,response)=>{
	response.render(path.join(__dirname,'index.handlebars'),{reactContent:ReactDOMServer.renderToString(<Component/>)});
});

app.get('/bundle.js',(request,response)=>{
	response.sendFile(path.join(__dirname,'build/bundle.js'));
});

console.log('starting');
app.listen(3000);
