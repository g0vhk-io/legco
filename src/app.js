import express from 'express';
import React from 'react';
import Home from './Home';
import template from './template';

const server = express();

server.get('/', (req, res) => {
  res.send(template({
    app: (<Home />),
    title: 'g0vhk'
  }));
});

server.use('/assets', express.static('assets'));

server.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})

