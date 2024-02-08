// backend/app.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; // Adjust as needed

app.use(cors()); // Enable CORS

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
