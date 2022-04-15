// server.js
//
// Use this sample code to handle webhook events in your integration.
//
// 1) Paste this code into a new file (server.js)
//
// 2) Install dependencies
//   npm install stripe
//   npm install express
//
// 3) Run the server on http://localhost:4242
//   node server.js

const stripe = require('stripe');
const express = require('express');
const app = express();

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_dTnL9Sm8HWCNyuOKbHlz1I7mJxzVDagD";

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'customer.subscription.created':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.created
      break;
    case 'customer.subscription.deleted':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.deleted
      break;
    case 'customer.subscription.pending_update_applied':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.pending_update_applied
      break;
    case 'customer.subscription.pending_update_expired':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.pending_update_expired
      break;
    case 'customer.subscription.trial_will_end':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.trial_will_end
      break;
    case 'customer.subscription.updated':
      const subscription = event.data.object;
      // Then define and call a function to handle the event customer.subscription.updated
      break;
    case 'invoice.created':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.created
      break;
    case 'invoice.deleted':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.deleted
      break;
    case 'invoice.finalized':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.finalized
      break;
    case 'invoice.marked_uncollectible':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.marked_uncollectible
      break;
    case 'invoice.paid':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.paid
      break;
    case 'invoice.payment_action_required':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.payment_action_required
      break;
    case 'invoice.payment_failed':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.payment_failed
      break;
    case 'invoice.payment_succeeded':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.payment_succeeded
      break;
    case 'invoice.sent':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.sent
      break;
    case 'invoice.updated':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.updated
      break;
    case 'invoice.voided':
      const invoice = event.data.object;
      // Then define and call a function to handle the event invoice.voided
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

app.listen(4242, () => console.log('Running on port 4242'));