/**
 * Email Validator API - Tutorial Example
 *
 * A simple Express server that validates email addresses using the APIVerve API.
 * https://apiverve.com/marketplace/emailvalidator
 */

const express = require('express');
const cors = require('cors');
const path = require('path');

const { PORT } = require('./config');
const validateRoute = require('./routes/validate');
const healthRoute = require('./routes/health');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/validate', validateRoute);
app.use('/health', healthRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Email Validator API running on http://localhost:${PORT}`);
  console.log('');
  console.log('Endpoints:');
  console.log(`  POST /validate  - Validate an email address`);
  console.log(`  GET  /health    - Health check`);
  console.log('');
  console.log('Example:');
  console.log(`  curl -X POST http://localhost:${PORT}/validate \\`);
  console.log(`       -H "Content-Type: application/json" \\`);
  console.log(`       -d '{"email": "test@example.com"}'`);
});
