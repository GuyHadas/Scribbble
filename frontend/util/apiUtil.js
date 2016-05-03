var UserActions = require("../actions/userActions.js");
var DesignActions = require("../actions/designActions.js");

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

  getDesign: function(designId) {
    $.ajax({
      type: 'GET',
      url: 'api/designs/' + designId.toString(),
      success: function(design) {
        DesignActions.receiveDesign(design);
      },
    });
  },

  deleteDesign: function(designId) {
    $.ajax({
      type: 'DELETE',
      url: 'api/designs/' + designId.toString(),
      success: function(design) {
        DesignActions.removeDesign(design);
      },
    });
  },

  fetchDesigns: function() {
    $.ajax({
      type: 'GET',
      url: 'api/designs',
      success: function(designs) {
        DesignActions.receiveDesigns(designs);
      }
    });
  },

  updateDesign: function(design) {
    $.ajax({
      type: 'PATCH',
      url: 'api/designs/' + design.id.toString(),
      data: {design: { title: design.title,
                       description: design.description,
                       design_url: design.design_url,
                       user_id: design.user_id }},
     success: function(updatedDesign) {
       DesignActions.receiveDesign(updatedDesign);
     }
    });
  },

  createDesign: function(design) {
    $.ajax({
      type: 'POST',
      url: 'api/designs',
      data: {design: {
        title: design.title,
        description: design.description,
        design_url: design.design_url,
        user_id: design.userId
      }},
     success: function(createdDesign) {
       DesignActions.receiveDesign(createdDesign);
     },
     error: function(errors) {
       DesignActions.receiveErrors(errors);
     }
    });
  },

  createComment: function(comment) {
    console.log(comment);
    $.ajax({
      type: 'POST',
      url: 'api/comments',
      data: {comment: {
        body: comment.body,
        x_pos: comment.xPos,
        y_pos: comment.yPos,
        design_id: comment.designId,
        user_id: comment.userId
      }},
      success: function(design) {
        DesignActions.receiveDesign(design);
      },
      error: function(errors) {
        DesignActions.receiveErrors(errors);
      }
    });
  },

  deleteComment: function(commentId) {
    $.ajax({
      type: 'DELETE',
      url: 'api/comments' + commentId.toString(),
      success: function(design) {
        DesignActions.receiveDesign(design);
      }
    });
  }

};

module.exports = ApiUtil;
