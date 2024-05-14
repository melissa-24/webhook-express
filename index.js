const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Server is running');
  });

// Webhook endpoint
app.post('/webhook', (req, res) => {
  console.log('Received GitHub webhook:');
  console.log(req.body); // Log the entire payload
  // You can also extract specific information from the payload and log it
  console.log('Commit message:', req.body.head_commit.message);
  console.log('Repository:', req.body.repository.name);
  console.log('Pusher:', req.body.pusher.name);
  res.sendStatus(200); // Respond to the webhook with a success status
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});