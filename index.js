const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse JSON bodies
app.use(bodyParser.json());

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

// Start the server
// app.listen(port, () => {
//   console.log(`Webhook server is listening at http://localhost:${port}/webhook`);
// });