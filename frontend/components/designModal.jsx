var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;
var Modal = require("react-modal");

 var DesignForm = require("./designForm.jsx");


var DesignFormModalStyle = require("../misc/design_form_modal_style.js");


var DesignModal = React.createClass({
  getInitialState: function() {
    return { modalOpen: false };
  },

  closeModal: function(){
    this.setState({ modalOpen: false});
    DesignFormModalStyle.content.opacity = 0;
  },

  openModal: function(bool) {
    this.setState({ modalOpen: true, signIn: bool });
  },

  onModalOpen: function() {
    DesignFormModalStyle.content.opacity = 100;
  },

  render: function() {
    return (
      <div>
        <span className="nav-session-button" onClick={this.openModal}>New Design</span>
        <Modal isOpen={this.state.modalOpen}
                onRequestClose={this.closeModal}
                style={DesignFormModalStyle}
                onAfterOpen={this.onModalOpen}
                >
          <div className="modal">
            <DesignForm />
          </div>
        </Modal>
      </div>
    );
  }
});

module.exports = DesignModal;
