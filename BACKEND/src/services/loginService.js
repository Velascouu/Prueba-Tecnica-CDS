const User = require("../database/User");

const getUser = (username) => { 
    const oneUser = User.getUser(username);
    return oneUser;
};

const getAllUsers = () => { 
    const allUsers = User.getAllUsers();
    return allUsers;
};

const postUser = (user) => { 
    const usuario = User.postUser(user);
    return usuario;
};

module.exports = {
    getAllUsers,
    getUser,
    postUser
};