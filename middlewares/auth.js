const jwtmodule = require('../jwt')
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./jwt.properties');

const auth = async(req, res, next) => {
    console.log('Authenticating request: method - %s,  url - %s', req.method, req.url);

    const cookieName = properties.get('jwt.cookieName');
    var jwtUserIdClaim = properties.get('jwt.userIdClaim');

    const jwtCookieValue = req.cookies[cookieName];

    if (!jwtCookieValue) {
        console.log("Not authorized access to the %s", req.url);
        res.status(401).send({ error: 'Not authorized to access this resource' })
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
    }

    // const data = jwt.verify(token, process.env.JWT_KEY)
    // try {
    //     const user = await User.findOne({ _id: data._id, 'tokens.token': token })
    //     if (!user) {
    //         throw new Error()
    //     }
    //     req.user = user
    //     req.token = token
    //     next()
    // } catch (error) {
    //     res.status(401).send({ error: 'Not authorized to access this resource' })
    // }

    next()
}

module.exports.auth = auth;