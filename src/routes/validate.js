/**
 * Email Validation Route
 *
 * Handles email validation requests using the APIVerve Email Validator API.
 */

const express = require('express');
const { API_KEY, API_URL } = require('../config');

const router = express.Router();

/**
 * POST /validate
 * Validates an email address and returns detailed information
 */
router.post('/', async (req, res) => {
  const { email } = req.body;

  // Validate input
  if (!email) {
    return res.status(400).json({
      error: 'Email address is required'
    });
  }

  // Check API key
  if (API_KEY === 'your-api-key-here') {
    return res.status(500).json({
      error: 'API key not configured. Add your key to src/config.js'
    });
  }

  try {
    // Call the APIVerve Email Validator
    const response = await fetch(`${API_URL}?email=${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY
      }
    });

    const data = await response.json();

    if (data.status === 'ok') {
      res.json({
        success: true,
        email: data.data.email,
        isValid: data.data.isValid,
        details: {
          domain: data.data.domain,
          username: data.data.username,
          isFreeEmail: data.data.isFreeEmail,
          isCompanyEmail: data.data.isCompanyEmail,
          mxValid: data.data.isMxValid,
          smtpValid: data.data.isSmtpValid,
          hasTypo: data.data.hasTypo
        }
      });
    } else {
      res.status(400).json({
        success: false,
        error: data.error || 'Validation failed'
      });
    }
  } catch (err) {
    console.error('API Error:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to validate email'
    });
  }
});

module.exports = router;
