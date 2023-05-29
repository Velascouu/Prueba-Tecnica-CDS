const loginService = require("../services/loginService");
const users = require('../database/users.json');

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

const logUser = (req, res) => {
    const { body } = req;
    const user = {
        username: body.username,
        password: body.password
    }

    for (let i = 0; i <= users.usuarios.length; i++) {
    // Realizar la verificación de inicio de sesión
        if (user.username == users.usuarios[i].user && user.password == users.usuarios[i].pass) {
            // Credenciales válidas, enviar una respuesta exitosa
            res.json({ success: true, message: 'Inicio de sesión exitoso', data: users.usuarios[i]});
        } else {
            // Credenciales inválidas, enviar una respuesta de error
            res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
        }
    }


    //const usuario = loginService.postUser(user);
    //res.status(200).send(usuario);
    //return user;
};

module.exports = {
    getUser,
    getAllUsers,
    logUser
};