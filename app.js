const express = require('express');
const {initialize} = require('express-openapi');
const v1UserService = require('./api-v1/services/userService');
const v1ApiDoc = require('./api-v1/api-doc');
const swaggerUi = require('swagger-ui-express');

const app = express();

const options = {
    swaggerUrl: "http://localhost:3000/v1/api-docs"
}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));

initialize({
  app,
  // NOTE: If using yaml it's necessary to use "fs" e.g.
  // apiDoc: fs.readFileSync(path.resolve(__dirname, './api-v1/api-doc.yml'), 'utf8'),
  apiDoc: v1ApiDoc,
  dependencies: {
    userService: v1UserService
  },
  paths: './api-v1/paths'
});
 
app.listen(3000);