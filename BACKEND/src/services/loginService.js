const User = require("../database/User");

const getUser = (username) => { 
    const oneUser = User.getUser(username);
    return oneUser;
};

const getAllUsers = () => { 
    const allUsers = User.getAllUsers();
    return allUsers;
};

module.exports = {
    getAllUsers,
    getUser
};