# Email Validator API | APIVerve API Tutorial

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build](https://img.shields.io/badge/Build-Passing-brightgreen.svg)]()
[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey)](https://expressjs.com)
[![APIVerve | Email Validator](https://img.shields.io/badge/APIVerve-Email_Validator-purple)](https://apiverve.com/marketplace/emailvalidator?utm_source=github&utm_medium=tutorial&utm_campaign=email-validator-node-tutorial)

A simple Node.js/Express API service that validates email addresses. Check if emails are real, deliverable, and catch typos before they become bounces.

![Screenshot](https://raw.githubusercontent.com/apiverve/email-validator-node-tutorial/main/screenshot.jpg)

---

### Get Your Free API Key

This tutorial requires an APIVerve API key. **[Sign up free](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=email-validator-node-tutorial)** - no credit card required.

---

## Features

- Validate any email address in real-time
- Check MX records and SMTP connectivity
- Detect free vs. company email addresses
- Catch common typos (e.g., gmial.com → gmail.com)
- Simple REST API with JSON responses
- Includes a web UI for testing
- Production-ready error handling

## Quick Start

1. **Clone this repository**
   ```bash
   git clone https://github.com/apiverve/email-validator-node-tutorial.git
   cd email-validator-node-tutorial
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your API key**

   Open `src/config.js` and replace the placeholder with your API key:
   ```javascript
   API_KEY: 'your-api-key-here'
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Test it out**

   Open http://localhost:3000 in your browser, or use curl:
   ```bash
   curl -X POST http://localhost:3000/validate \
        -H "Content-Type: application/json" \
        -d '{"email": "test@gmail.com"}'
   ```

## Project Structure

```
email-validator-node-tutorial/
├── src/
│   ├── routes/
│   │   ├── validate.js  # Email validation endpoint
│   │   └── health.js    # Health check endpoint
│   ├── config.js        # API key and settings
│   └── index.js         # Express app setup
├── public/
│   └── index.html       # Web UI for testing
├── package.json         # Dependencies
├── screenshot.jpg       # Preview image
├── LICENSE              # MIT license
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## API Reference

### POST /validate

Validates an email address and returns detailed information.

**Request Body:**

```json
{
  "email": "test@example.com"
}
```

**Response (Valid Email):**

```json
{
  "success": true,
  "email": "test@gmail.com",
  "isValid": true,
  "details": {
    "domain": "gmail.com",
    "username": "test",
    "isFreeEmail": true,
    "isCompanyEmail": false,
    "isMxValid": true,
    "isSmtpValid": true,
    "hasTypo": false,
    "canConnect": true
  }
}
```

**Response (Invalid Email):**

```json
{
  "success": true,
  "email": "bad@notarealdomain.xyz",
  "isValid": false,
  "details": {
    "domain": "notarealdomain.xyz",
    "username": "bad",
    "isFreeEmail": false,
    "isCompanyEmail": false,
    "isMxValid": false,
    "isSmtpValid": false,
    "hasTypo": false,
    "canConnect": false
  }
}
```

### GET /health

Health check endpoint for monitoring.

```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## Use Cases

Email validation is essential for:

- **User Registration** - Prevent fake signups and reduce bounces
- **Lead Generation** - Verify leads before adding to your CRM
- **Email Marketing** - Clean your lists to improve deliverability
- **Contact Forms** - Catch typos before users submit
- **E-commerce** - Ensure order confirmations reach customers
- **B2B Sales** - Verify business emails for outreach

## Validation Checks

The API performs multiple validation checks:

| Check | Field | Description |
|-------|-------|-------------|
| Format | `isRegexValid` | Valid email syntax |
| MX Record | `isMxValid` | Domain has mail servers |
| SMTP | `isSmtpValid` | Mail server accepts connections |
| Typo Detection | `hasTypo` | Common domain misspellings |
| Free Email | `isFreeEmail` | Gmail, Yahoo, etc. |
| Company Email | `isCompanyEmail` | Corporate domain |

## Customization Ideas

- Add rate limiting with `express-rate-limit`
- Store validation results in a database
- Add batch validation for multiple emails
- Integrate with your signup flow
- Add webhook notifications for invalid emails

## Related APIs

Explore more APIs at [APIVerve](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=email-validator-node-tutorial):

- [Email Disposable Checker](https://apiverve.com/marketplace/emaildisposablechecker?utm_source=github&utm_medium=tutorial&utm_campaign=email-validator-node-tutorial) - Detect temporary email addresses
- [Phone Validator](https://apiverve.com/marketplace/phonenumbervalidator?utm_source=github&utm_medium=tutorial&utm_campaign=email-validator-node-tutorial) - Validate phone numbers
- [DNS Lookup](https://apiverve.com/marketplace/dnslookup?utm_source=github&utm_medium=tutorial&utm_campaign=email-validator-node-tutorial) - Query DNS records

## Free Plan Note

This tutorial works with the free APIVerve plan. Some APIs may have:
- **Locked fields**: Premium response fields return `null` on free plans
- **Ignored parameters**: Some optional parameters require a paid plan

The API response includes a `premium` object when limitations apply. [Upgrade anytime](https://dashboard.apiverve.com/plans) to unlock all features.

## License

MIT - see [LICENSE](LICENSE)

## Links

- [Get API Key](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=email-validator-node-tutorial) - Sign up free
- [APIVerve Marketplace](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=email-validator-node-tutorial) - Browse 300+ APIs
- [Email Validator API](https://apiverve.com/marketplace/emailvalidator?utm_source=github&utm_medium=tutorial&utm_campaign=email-validator-node-tutorial) - API details
