let users = {
  Toto: {
    name: 'Toto',
    lastName: 'Vincent',
    id:0
  },
  Bob:{
    name: 'Bob',
    lastName: 'Razowski',
    id:1
  }
};

const userService = {
  userByName,
  userById
};

function userByName(name){
  return users[name] ? [users[name]] : [];
}

function userById(id){
  console.log('id :', id);
  return id;
}

function createUser(userInfo){

}

module.exports = userService;