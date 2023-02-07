const fs = require('fs');
const path = require('path');
const usersDataPath = path.join(__dirname, "../data/usuariosRegistrados.json");
const users = JSON.parse(fs.readFileSync(usersDataPath, "utf-8"));
const writeJson = (users) => {
    fs.writeFileSync(usersDataPath, JSON.stringify(users), "utf8")
}


module.exports = {
    users: (req, res) => {
        res.render("users/construccion" , { style : "styles.css" })
    },
    register: (req, res) => {
        res.render("users/register" , { style : "register.css" });
    },
    crear: (req, res) => {
        let user = {
            id: users.length + 1,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
        }
        users.push(user);
        writeJson(users);
        res.redirect("/users/login");
    },
    login: (req, res) => {
        res.render("users/login" , { style : "styles.css" })
    },
    resetPassword: (req, res) => {
        res.render("users/reset-password" , { style : "styles.css" })
    }
}