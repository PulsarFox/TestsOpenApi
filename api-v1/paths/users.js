module.exports =  function(userService) {
    let operations = {
      GET
    };
   
    function GET(req, res, next) {
      res.status(200).json(userService.getWorlds(req.query.worldName));
    }
   
    // NOTE: We could also use a YAML string here.
    GET.apiDoc = {
      summary: 'Returns a Semapps User.',
      operationId: 'getUser',
      parameters: [
        {
          in: 'query',
          name: 'username',
          required: true,
          type: 'string'
        }
      ],
      responses: {
        200: {
          description: 'User matching name',
          schema: {
            type: 'array',
            items: {
              $ref: '#/definitions/User'
            }
          }
        },
        default: {
          description: 'An error occurred',
          schema: {
            additionalProperties: true
          }
        }
      }
    };
   
    return operations;
  }