const express = require('express');

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
  return res.send('Hello There');
});

app.get('/vehicle', (req, res) => {
  return res.json({ make: 'Dodge', model: 'Dart', year: 2013 });
});

app.listen(PORT, () => {
  console.log(`App listening in port https://localhost:${PORT}`);
});
