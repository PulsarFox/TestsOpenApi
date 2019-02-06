module.exports = function(userService) {
  let operations = {
    GET,
    parameters
  };

  let parameters = [    
  {
    in: 'path',
    name: 'id',
    required: true,
    type: 'integer'
  }
];
  
  function GET(req, res, next) {
    res.status(200).json(userService.userById(req.path.id));
  }
  
  // NOTE: We could also use a YAML string here.
  GET.apiDoc = {
    summary: 'Returns a Semapps User.',
    operationId: 'userById',
    responses: {
      200: {
        description: 'User matching id',
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