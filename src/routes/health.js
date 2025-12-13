/**
 * Health Check Route
 *
 * Simple endpoint to verify the server is running.
 */

const express = require('express');
const router = express.Router();

/**
 * GET /health
 * Returns server status
 */
router.get('/', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
