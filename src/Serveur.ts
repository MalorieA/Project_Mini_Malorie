const express = require('express');

import { InformationsSYS } from './InformationsSys';

const hostname = 'localhost';
const port = 8000;

const app = express();

app.get('/api/v1/sysinfo', async function (req, res) {
  try {
    const sys = await InformationsSYS();
    res.status(200).json(sys);
  } catch (error) {
    console.error('ERRORRR ', error);
    res.status(404).json({ error: 'Not found' });
  }
});

export function start() {
  app.listen(port, hostname, function () {
    console.log('EXECUTIONNN ' + hostname + ':' + port);
  });
}
