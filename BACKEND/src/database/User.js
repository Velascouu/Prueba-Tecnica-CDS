const users = require('./users.json');

const getAllUsers = () => {
    return users.usuarios;
};

const getUser = (username) => {
    for (let i = 0; i < users.usuarios.length; i++) {
        console.log(username);
        if(username == users.usuarios[i].user && password == users.usuarios[i].pass){
            console.log(users.usuarios[i]);
            
            return users.usuarios[i].user;
        }
    }
    return "Error";
};

const postUser = (req, res) => {
    const { password, username } = req;

    for (let i = 0; i < users.usuarios.length; i++) {
    // Realizar la verificación de inicio de sesión
        if (username === users.usuarios[i].user && password === users.usuarios[i].pass) {
            // Credenciales válidas, enviar una respuesta exitosa
            res.json({ success: true, message: 'Inicio de sesión exitoso' });
        } else {
            // Credenciales inválidas, enviar una respuesta de error
            res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
        }
    }
    return req;
};

module.exports = {
    getAllUsers,
    getUser,
    postUser
};