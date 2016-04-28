var dispatcher = require("../dispatcher/dispatcher.js");
var DesignConstants = require("../constants/designConstants");

var DesignActions = {
  receiveDesign: function(design){
    dispatcher.dispatch({
      actionType: DesignConstants.DESIGN_RECEIVED,
      design: design
    });
  },

  removeDesign: function(design) {
    dispatcher.dispatch({
      actionType: DesignConstants.DESIGN_REMOVED,
      design: design
    });
  },

  receiveDesigns: function(designs) {
    dispatcher.dispatch({
      actionType: DesignConstants.DESIGNS_RECEIVED,
      designs: designs
    });
  }
};

module.exports = DesignActions;
