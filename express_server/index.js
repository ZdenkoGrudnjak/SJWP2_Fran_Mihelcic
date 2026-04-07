import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>My home page<h1>');
});

app.get('/about', (req, res) => {
  res.send('<h3>About me page<h3>');
});

app.get('/contact', (req, res) => {
  res.send('<h3>Contact us<h3>');
});

app.get('/info', (req, res) => {
  res.send('<h3>Info Pages<h3>');
});



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});