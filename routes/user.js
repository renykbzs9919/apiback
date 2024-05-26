const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const perfilController = require('../controllers/perfil.controller');

router.route('/register')
    .post(userController.postRegistro);

router.route('/login')
    .post(userController.postLogin);

router.route('/usuarios')
    .get(perfilController.getPerfil);

module.exports = router;