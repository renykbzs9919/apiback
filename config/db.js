const mongoose = require('mongoose');
require('dotenv').config();
const { getLogger } = require('@jwt/utils');
const log = getLogger(__dirname, __filename);

mongoose.Promise = global.Promise;

const mongoDBUrl = process.env.MONGODB_URL;

mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('¡Conexión exitosa a la base de datos!');
    }).catch(err => {
        console.log('¡Ups! Hubo un error al conectar con la base de datos.');
        log.error(err.message);
        process.exit(1);
    });

module.exports = mongoose.connection;
