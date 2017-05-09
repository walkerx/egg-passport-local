'use strict';

const localStrategy = require('passport-local').Strategy;

module.exports = app => {
    const config = app.config.passportLocal;
    config.passReqToCallback = true;

    app.passport.use('local', new localStrategy(config, (req, username, password, done) => {
        const user = {
            name:username,
            pass:password
        };
        app.passport.doVerify(req, user, done);
    }));

};
