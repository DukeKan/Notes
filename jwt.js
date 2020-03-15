const jwtmodule = require('jsonwebtoken');
const PropertiesReader = require('properties-reader');

module.exports = {
    decode(token) {
        console.log('Decoding ' + token)
        var properties = PropertiesReader('jwt.properties');

        var jwtSecret = properties.get('jwt.secret');
        var jwtUserIdClaim = properties.get('jwt.userIdClaim');

        jwtmodule.verify(token, jwtSecret, function(err, decoded) {
            console.log(err);
            console.log(decoded[jwtUserIdClaim]);
        });
    }
}