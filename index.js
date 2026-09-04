require('dotenv').config();
const express = require('express');

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  console.log("ROOT ROUTE HIT");
  res.status(200).send('HELLO FROM MY RENDER SERVER');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})