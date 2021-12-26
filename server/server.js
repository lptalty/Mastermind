const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const cors = require('cors');

const numberRouter = require('./routers/numberRouter')

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.get('/', (req, res) => {
  return res.status(200).send();
});

app.use('/api', numberRouter);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught an unknown middleware error',
    status: 500,
    message: { err: 'An error has occurred'},
  }
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app; //-> http://localhost:3000/
// localhost:8080
