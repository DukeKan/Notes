function logger(req, res, next) {
    console.log('Request processing: Date - %s, method - %s,  url - %s', new Date(), req.method, req.url);
    next();
}

module.exports.logger = logger;