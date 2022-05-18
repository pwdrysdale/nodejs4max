
const express = require('express');
const peopleRoutes = require('./people/router');

const PORT = process.env.PORT || 3001;

const app = express();

// use json
app.use(express.json());

app.use('/people', peopleRoutes)

// ============================================================
// Really just to show you stuff

app.get('/', (req, res) => {

  // send text
  // res.send('Hello World!');

  // send json
  res.status(200).json({
    message: 'Hello World!',
  });
});

app.get('/hello', (req, res) => {
  res.status(200).json({
    message: 'Hello Again World!',
  });
});

let count = 0

app.get('/counter', (req, res) => {
  count += 1;
  res.status(200).json({
    count
  });
});


app.post('/login', (req, res) => {

  const { username, password } = req.body;

  if (username === 'admin' && password === 'password') {
    res.status(200).json({
      message: 'Login Successful',
    });
  } else {
    res.status(401).json({
      message: 'Login Failed',
    });
  }
});

// PUT requests are similar
// DELETE requests are for deleting data


// ============================================================
// Real stuff again

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});