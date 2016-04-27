var UserActions = require("../actions/userActions.js");

var ApiUtil = {
  fetchCurrentUser: function() {
    $.ajax({
      type: 'GET',
      url: 'api/session',
      success: function(currentUser) {
        UserActions.receiveCurrentUser(currentUser);
      },
    });
  },

  loginUser: function(user) {
    $.ajax({
      type: 'POST',
      url: 'api/session',
      data: {user: {username: user.username, password: user.password}},
      success: function(currentUser) {
        UserActions.receiveCurrentUser(currentUser);
      },
      error: function(errors) {
        UserActions.receiveErrors(errors);
      }
    });
  },

  logoutUser: function() {
    $.ajax({
      type: 'DELETE',
      url: 'api/session',
      success: function(emptyObject) {
        UserActions.userLoggedOut();
      }
    });
  },

  createUser: function(user) {
    $.ajax({
      type: 'POST',
      url: 'api/user',
      data: {user: {username: user.username, password: user.password}},
      success: function(currentUser) {
        UserActions.receiveCurrentUser(currentUser);
      },
      error: function(errors) {
        UserActions.receiveErrors(errors);
      }
    });
  },

};

module.exports = ApiUtil;
