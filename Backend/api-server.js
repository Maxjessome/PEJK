const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const app = express();
require('dotenv').config();


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-ro0qsq4z.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://localhost:8100',
  issuer: 'https://dev-ro0qsq4z.us.auth0.com/',
  algorithms: ['RS256']
});

app.get(jwtCheck);

app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});
