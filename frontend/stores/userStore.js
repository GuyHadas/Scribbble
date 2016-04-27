var Store = require('flux/utils').Store;
var dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require("../constants/userConstants.js");

var _currentUser = null;

var UserStore = new Store(dispatcher);

UserStore.loggedIn = function() {
  if (_currentUser.username) {
    return true;
  } else {
    return false;
  }
};

UserStore.currentUser = function() {
  return _currentUser;
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.CURRENT_USER_RECEIVED:
      _currentUser = payload.currentUser;
      UserStore.__emitChange();
      break;
    case UserConstants.LOGOUT_USER:
      _currentUser = null;
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
