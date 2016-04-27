var Store = require('flux/utils').Store;
var dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require("../constants/userConstants.js");
var ErrorConstants = require("../constants/errorConstants.js");

var _errors = [];

var ErrorStore = new Store(dispatcher);

ErrorStore.all = function () {
  return _errors.slice();
};

var resetErrors = function(errors) {
  _errors = errors.responseJSON.errors;
};

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.ERRORS_RECEIVED:
      resetErrors(payload.errors);
      ErrorStore.__emitChange();
      break;
    case ErrorConstants.CLEAR_ERRORS:
      _errors = [];
      ErrorStore.__emitChange();
      break;
  }
};

module.exports = ErrorStore;
