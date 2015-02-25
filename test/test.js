var assert = require('assert');
var app = require('../server/server.js'); //path to app.js or server.js


// https://github.com/strongloop/loopback/issues/947
describe('#947', function() {
  it('reset password by existed email, err is undefined', function() {
    // create user and reset password by existed email
    app.models.User.create({email: 'existed@mail.com', password: 'bar'}, function(err, user) {
      app.models.User.resetPassword({email: 'existed@mail.com'}, function (err) {
        assert(err === undefined);
      });
    });
  });
  it('reset password by not existed email, should be err defined', function() {
    // reset password by not existed mail
    // excepted err be defined
    app.models.User.resetPassword({email: 'not-existed@mail.com'}, function (err) {
       assert(err);
    });
  });
});
