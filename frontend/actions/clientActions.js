var ApiUtil = require("../util/apiUtil.js");
var dispatcher = require("../dispatcher/dispatcher.js");
var ErrorConstants = require("../constants/errorConstants.js");

var clientActions = {
  fetchCurrentUser: function() {
    ApiUtil.fetchCurrentUser();
  },

  loginUser: function(user) {

    ApiUtil.loginUser(user);
  },

  logoutUser: function() {
    ApiUtil.logoutUser();
  },

  createUser: function(user) {
    ApiUtil.createUser(user);
  },

  clearErrors: function() {
    dispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS
    });
  },

};

module.exports = clientActions;
