const users = require('./users.json');

const getAllUsers = () => {
    return users.usuarios;
};

const getUser = (username) => {
    for (let i = 0; i < users.usuarios.length; i++) {
        if(username == users.usuarios.user){
            console.log(users.usuarios.userra);
            return true;
        }else{
            return false;
        }
    }
};

module.exports = {
    getAllUsers,
    getUser
};