import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import Home from './Home';
import template from './template';

const server = express();

server.get('/', (req, res) => {
  res.send(template({
    body: renderToString(<Home />),
    title: 'g0vhk'
  }));
});

server.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})

