const Validator = require('validator');
const isEmpty = require('./is-empy');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : '';

    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.message = 'Nombre minimo de 2 a 30 caracteres';
    }

    if (Validator.isEmpty(data.name)) {
        errors.message = 'Nombre es requerido';
    }

    if (!Validator.isEmail(data.email)) {
        errors.message = 'Email es invalido';
    }

    if (Validator.isEmpty(data.email)) {
        errors.message = 'Email es requerido';
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.message = 'Password necesita minimo 6 caracteres';
    }

    if (Validator.isEmpty(data.password)) {
        errors.message = 'Password es requerido';
    }

    if (!Validator.isLength(data.password_confirm, { min: 6, max: 30 })) {
        errors.message = 'Password necesita minimo 6 caracteres';
    }

    if (!Validator.equals(data.password, data.password_confirm)) {
        errors.message = 'Password y confirma password';
    }

    if (Validator.isEmpty(data.password_confirm)) {
        errors.message = 'Password es requerido';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}