const jwtmodule = require('../jwt')
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./jwt.properties');

const auth = async(req, res, next) => {
    console.log('Authenticating request: method - %s,  url - %s', req.method, req.url);

    const cookieName = properties.get('jwt.cookieName');
    const jwtUserIdClaim = properties.get('jwt.userIdClaim');
    const authServer = properties.get('jwt.authServerUrl');

    const jwtCookieValue = req.cookies[cookieName];

    if (!jwtCookieValue) {
        console.log("Not authorized access to the %s. Redirectirng to auth server %s", req.url, authServer);
        res.status(401).send({ error: 'Not authorized to access this resource', authServer: authServer })
        return;
    }

    console.log('JWT Cookie value %s', jwtCookieValue);

    try {
        const token = jwtmodule.decode(jwtCookieValue);
        console.log('Authenticating request: method - %s,  url - %s. Token %s', req.method, req.url, token);
        const userId = token[jwtUserIdClaim];
        console.log("User identity: %s", userId);
    } catch (err) {
        res.status(401).send({ error: 'Not authorized to access resource: ' + req.url })
        return;
    }

    next()
}

module.exports.auth = auth;