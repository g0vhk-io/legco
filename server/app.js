import express from 'express';
import React from 'react';
import { template } from '../src/template';

const server = express();

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
  res.render('pages/index')
});

server.get('/legco', (req, res) => {
  res.render('pages/legco')
});


server.use('/assets', express.static('assets'));

server.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})

