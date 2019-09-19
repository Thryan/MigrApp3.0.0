"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const JWT_Secret = 'your_secret_key';
var testUser = { email: 'ricardo', password: '1234' };
router.post('/', (req, res) => {
    if (req.body) {
        var user = req.body;
        console.log(user);
        if (testUser.email === req.body.email && testUser.password === req.body.password) {
            var token = jwt.sign(user, JWT_Secret);
            res.status(200).send({
                signed_user: user,
                token: token
            });
        }
        else {
            res.status(200).send({
                errorMessage: 'Authorisation required!'
            });
        }
    }
    else {
        res.status(403).send({
            errorMessage: 'Please provide email and password'
        });
    }
});
exports.default = router;
//# sourceMappingURL=login.js.map