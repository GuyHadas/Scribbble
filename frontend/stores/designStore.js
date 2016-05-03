var Store = require('flux/utils').Store;
var dispatcher = require('../dispatcher/dispatcher');
var DesignConstants = require("../constants/designConstants.js");

var _designs = {};

var DesignStore = new Store(dispatcher);

DesignStore.all = function () {
  var designs = Object.keys(_designs).map(function(designId) {
    return _designs[designId];
  });
  return designs.reverse();
};

DesignStore.find = function(designId) {
  return _designs[designId];
};

var resetDesigns = function(designs) {
  _designs = {};
  for (var i = 0; i < designs.length; i++) {
    _designs[designs[i].id] = designs[i];
  }
  return _designs;
};

DesignStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case DesignConstants.DESIGN_RECEIVED:
      _designs[payload.design.id] = payload.design;
      DesignStore.__emitChange();
      break;
    case DesignConstants.DESIGNS_RECEIVED:
      resetDesigns(payload.designs);
      DesignStore.__emitChange();
      break;
    case DesignConstants.DESIGN_REMOVED:
      delete _designs[payload.design.id];
      DesignStore.__emitChange();
      break;
  }
};

module.exports = DesignStore;
