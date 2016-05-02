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

  getDesign: function(designId) {
    ApiUtil.getDesign(designId);
  },

  deleteDesign: function(designId) {
    ApiUtil.deleteDesign(designId);
  },

  fetchDesigns: function() {
    ApiUtil.fetchDesigns();
  },

  updateDesign: function(design) {
    ApiUtil.updateDesign(design);
  },

  createDesign: function(design) {
    ApiUtil.createDesign(design);
  },

  createComment: function(comment) {
    ApiUtil.createComment(comment);
  },

  deleteComment: function(commentId) {
    ApiUtil.deleteComment(commentId);
  }
};

module.exports = clientActions;
