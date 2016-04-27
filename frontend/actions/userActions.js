var dispatcher = require("../dispatcher/dispatcher.js");
var UserConstants = require("../constants/userConstants.js");

var UserActions = {
  receiveCurrentUser: function(currentUser){
    dispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER_RECEIVED,
      currentUser: currentUser
    });
  },

  userLoggedOut: function() {
    dispatcher.dispatch({
      actionType: UserConstants.LOGOUT_USER
    });
  },

  receiveErrors: function(errors) {
    dispatcher.dispatch({
      actionType: UserConstants.ERRORS_RECEIVED,
      errors: errors
    });
  }
};

module.exports = UserActions;
