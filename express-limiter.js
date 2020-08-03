let ip_history = [];

module.exports = function (config) {
    setInterval(() => { ip_history = []; }, config.INTERVAL);
    return function (req, res, next) {
        ip_history.push(req.ip);
        let counter = 0;
        for (let i = 0; i < ip_history.length; i++) {
            if (ip_history[i] === req.ip) {
                counter++;
            }
        }
        if (counter > config.MAX_REQUESTS) {
            if (config?.json_response === undefined) {
                res.end();
            } else {
                res.json(config.json_response);
            }
        } else {
            next();
        }
    }
}
