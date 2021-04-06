const express = require('express');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const cors = require("cors");
const { resolve } = require("path");
const jwtAuthz = require("express-jwt-authz");


require("dotenv").config({
  path: resolve(process.cwd(), "src", "server", ".env"),
});

const port = process.env.API_PORT;
const appOrigin = process.env.APP_ORIGIN;
const audience = process.env.AUTH0_AUDIENCE;
const issuer = process.env.AUTH0_ISSUER;


if (!issuer || !audience) {
  throw new Error("Please make sure that .env is in place and populated");
}

app.use(cors({ origin: appOrigin }));

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-ro0qsq4z.us.auth0.com/.well-known/jwks.json'
  }),

  audience: audience,
  issuer: issuer,
  algorithms: ['RS256']
});

const checkPermissions = jwtAuthz(["read:maintenance"], {
  customScopeKey: "permissions"
});

app.get(jwtCheck);

app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

app.get("/api/public", (req, res) => {
  res.send({
    msg: "The API doesn't require an access token to share this message.",
  });
});

app.get("/api/protected", jwtCheck, (req, res) => {
  res.send({
    msg: "The API successfully validated your access token.",
  });
});

app.get("/api/role", jwtCheck, checkPermissions, (req, res) => {
  res.send({
    msg: "You called the role endpoint!",
  });
});
app.listen(port, () => console.log(`API Server listening on port ${port}`));

