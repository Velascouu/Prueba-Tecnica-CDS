const loginService = require("../services/loginService");

const getUser = (req, res) => {
    const oneUser = loginService.getUser(req.params.user);
    res.send(oneUser);
    return oneUser;
};

const getAllUsers = (req, res) => {
    const allUser = loginService.getAllUsers(req.params.user);
    res.send(allUser);
    return allUser;
};

module.exports = {
    getUser,
    getAllUsers
};