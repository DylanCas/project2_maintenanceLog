const auth = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect('../public/html/login');
    } else {
        next();
    }
}

module.exports = auth;