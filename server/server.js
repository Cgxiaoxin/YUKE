const express = require('express');
const apiRoutes = require('./routes/api');
const app = express();
const port = 3000;

app.use(express.json());

// Dummy root route
app.get('/', (req, res) => {
  res.send('YUKE Pilates server is running!');
});

// Use API routes
app.use('/api', apiRoutes);


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
