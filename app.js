const express = require('express');
const port = 3000;
const app = express();
require('dotenv').config();
const YAML = require('yamljs');
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = YAML.load('./swagger.yaml');

const hourRouter = require('./routes/hoursRoutes');
const userRouter = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

require('dotenv').config();

//DB connection
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);
mongoose.connect(DB, {
  useNewUrlParser: true,
}).then;
console.log('DB connection successfull!');

app.use('/hours', hourRouter);
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
