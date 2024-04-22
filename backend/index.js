const express = require('express');
const axios = require('axios');
var cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../backend/openapi.json');

const app = express();
const port = 3001;
app.use(cors());


// Route to serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Route to get products
app.get('/product', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const data = response.data;
    const filter = data;
    res.send({ data, filter });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

