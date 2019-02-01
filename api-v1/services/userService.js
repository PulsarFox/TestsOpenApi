let users = {
    Earth: {
      name: 'Earth'
    }
  };
   
  const userService = {
    getUser(name) {
      return users[name] ? [users[name]] : [];
    }
  };
   
module.exports = userService;