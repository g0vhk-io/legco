import express from 'express';
import React from 'react';
import { template } from '../src/template';

const server = express();

server.get('/', (req, res) => {
  res.send(template({
    app: null,
    title: 'g0vhk'
  }));
});

server.use('/assets', express.static('assets'));

server.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})

