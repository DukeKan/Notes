const jwtmodule = require('../jwt')
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./jwt.properties');

const auth = async(req, res, next) => {
    console.log('Authenticating request: method - %s,  url - %s', req.method, req.url);

    const cookieName = properties.get('jwt.cookieName');
    const jwtUserIdClaim = properties.get('jwt.userIdClaim');
    const authServer = getAuthServerUrl();
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

const getAuthServerUrl = function() {
    console.log('process.env.NOTES_SEVICE_HOST: %s', process.env.NOTES_SEVICE_HOST);
    console.log('process.env.NOTES_SEVICE_HOST: %s', process.env.NOTES_SEVICE_HOST);
    console.log('process.env.JWT_AUTH_SERVER_URL: %s', process.env.JWT_AUTH_SERVER_URL);
    console.log('process.env.NOTES_URL: %s', process.env.NOTES_URL);

    if (process.env.JWT_AUTH_SERVER_URL) {
        const authProviderUrl = process.env.JWT_AUTH_SERVER_URL + '?redirect=' + process.env.NOTES_URL;
        console.log('Auth provider url from environment varables: %s', authProviderUrl);
        return authProviderUrl;
    } else {
        const authProviderUrl = properties.get('jwt.authServerUrl');
        console.log('Auth provider url from configuration file: %s', authProviderUrl);
        return authProviderUrl;
    }
}

module.exports.auth = auth;