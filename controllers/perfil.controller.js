const User = require('../models/User');
const gravatar = require('gravatar');
const passport = require('passport');
const { getLogger } = require('@jwt/utils')
const log = getLogger(__dirname, __filename)

async function getPerfil(req, res, next) {
    try {
        // Busca al usuario en la base de datos
        const user = await User.find();

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        return res.status(200).json(user);
    } catch (err) {
        log.error('Ups Hubo un error! ' + err);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    getPerfil
};