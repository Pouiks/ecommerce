require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./router/index');
const cors = require('cors');
const productController = require('./controllers/productController');
const port = process.env.PORT

console.log(port);
app.use(router);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors('*'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})