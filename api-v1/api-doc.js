const apiDoc = {
    swagger: '2.0',
    basePath: '/v1',
    info: {
      title: 'A getting started API.',
      version: '1.0.0'
    },
    definitions: {
      User: {
        type: 'object',
        description:"A Semantic User",
        properties: {
          name: {
            description: 'User name',
            type: 'string'
          }
        },
        required: ['name']
      }
    },
    paths: {}
  };
   
module.exports = apiDoc;