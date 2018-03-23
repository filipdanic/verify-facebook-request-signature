# Install

```
yarn add verify-facebook-request-signature
```

# Usage

```javascript

import verify from 'verify-facebook-request-signature';
const verifySignature = verify(FACEBOOK_APP_SECRET); // returns a curried function

// add as express middleware 
app.use(bodyParser.json({ verify: verifySignature }));
```
