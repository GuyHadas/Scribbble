var Store = require('flux/utils').Store;
var dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require("../constants/userConstants.js");

var myStorage = localStorage;
var _currentUser = JSON.parse(myStorage.getItem("currentUser"));

var UserStore = new Store(dispatcher);

UserStore.loggedIn = function() {
  if (_currentUser.username) {
    return true;
  } else {
    return false;
  }
};

UserStore.currentUser = function() {
  if (myStorage.getItem("currentUser") === "false") {
    return null;
  } else {
    return _currentUser;
  }
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.CURRENT_USER_RECEIVED:
      _currentUser = payload.currentUser;
      myStorage.setItem("currentUser", JSON.stringify(payload.currentUser));
      UserStore.__emitChange();
      break;
    case UserConstants.LOGOUT_USER:
      myStorage.setItem("currentUser", "false");
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
