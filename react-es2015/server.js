import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const app = express();

app.get('/',(request,response)=>{
	response.send(ReactDOMServer.renderToString(<div>Test</div>));
});

app.listen(3000);
