module.exports = (req, res, next) => req.session.userLogged ? next() : res.redirect("/users/login");
