var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;
var Modal = require("react-modal");

var DesignForm = require("./designForm.jsx");
var ErrorStore = require('../stores/errorStore.js');
var DesignStore = require("../stores/designStore.js");

var Errors = require("./errors.jsx");

var DesignFormModalStyle = require("../misc/design_form_modal_style.js");


var DesignModal = React.createClass({
  getInitialState: function() {
    return { modalOpen: false, errors: ErrorStore.all() };
  },

  componentDidMount: function() {
    this.errorStoreListener = ErrorStore.addListener(this.__onErrorChange);
    this.designStoreListener = DesignStore.addListener(this.__onDesignsChange);
    this.designCount = DesignStore.all().length;
  },

  componentWillUnmount: function() {
    this.errorStoreListener.remove();
    this.designStoreListener.remove();
  },

  __onErrorChange: function() {
    this.setState({ errors: ErrorStore.all() });
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

  __onDesignsChange: function() {
    if (DesignStore.all().length > this.designCount) {
      this.closeModal();
    }
    this.designCount = DesignStore.all().length;
  },

  render: function() {
    if (this.state.errors.length > 0) {
      var errors = <Errors errors={this.state.errors}/>;
    }
    return (
      <div>
        <span className="nav-session-button" onClick={this.openModal}>New Design</span>
        <Modal isOpen={this.state.modalOpen}
                onRequestClose={this.closeModal}
                style={DesignFormModalStyle}
                onAfterOpen={this.onModalOpen}
                >
          <div className="modal">
            {errors}
            <DesignForm userId={this.props.userId}/>
          </div>
        </Modal>
      </div>
    );
  }
});

module.exports = DesignModal;
