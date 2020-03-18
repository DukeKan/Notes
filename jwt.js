const jwtmodule = require('jsonwebtoken');
const PropertiesReader = require('properties-reader');

module.exports = {
    decode(token) {
        console.log('Decoding ' + token)
        var properties = PropertiesReader('jwt.properties');

        var jwtSecret = properties.get('jwt.secret');

        var decoded = jwtmodule.verify(token, jwtSecret);
        return decoded;
    }
}