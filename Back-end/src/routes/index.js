import express from 'express';
import bodyParser from 'body-parser';

// const app = express();
// const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
//app.use(bodyParser.json());

// Define your routes here
app.get('/', (_req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


export default indexRouter;