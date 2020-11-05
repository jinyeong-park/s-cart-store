const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HjZ6hCMZ8B0kysvq7IcFmi5VYpF6JVHKAKDoHmY4BdenrdZPiofJDSvPHufmKIgh5tBAKvsRdF8avy08RduWQKn002P4AFZKJ');
// express app hosted in the cloud funcitons

// Setup API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// API routes
app.get('/', (request, response) => response.status(200).send('success'))
// app.get('/jenny', (request, response) => response.status(200).send('hello jenny'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  //const total = request.params.total;

  console.log('Payment Request Received, total:', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  })

  // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,

  })
})
// Listen command
exports.api = functions.https.onRequest(app);

// api endpoint
// http://localhost:4000/functions  => http://localhost:5001/e-commerce-scart/us-central1/api


// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
