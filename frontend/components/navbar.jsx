var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;
var Modal = require("react-modal");

var UserStore = require("../stores/userStore.js");
var ErrorStore = require('../stores/errorStore.js');


var LogIn = require("./login.jsx");
var SignUp = require("./signup.jsx");
var LogOut = require("./logout.jsx");
var Errors = require("./errors.jsx");
var SessionModalStyle = require("../misc/sessionModalStyle.js");

var Navbar = React.createClass({

  getInitialState: function() {
    return { currentUser: UserStore.currentUser(), modalOpen: false, signIn: false, errors: ErrorStore.all() };
  },

  closeModal: function(){
    this.setState({ modalOpen: false});
    SessionModalStyle.content.opacity = 0;
  },

  openModal: function(bool) {
    this.setState({ modalOpen: true, signIn: bool });
  },

  onModalOpen: function() {
    SessionModalStyle.content.opacity = 100;
  },


  componentDidMount: function() {
    this.userStoreListener = UserStore.addListener(this.__onChange);
    this.errorStoreListener = ErrorStore.addListener(this.__onChange);
  },

  componentWillUnmount: function() {
    this.userStoreListener.remove();
    this.errorStoreListener.remove();
  },

  componentDidUpdate: function() {
    if (this.state.currentUser) {
      this.closeModal();
    }
  },

  __onChange: function() {
    this.setState({ currentUser: UserStore.currentUser(), errors: ErrorStore.all() });
  },

  render: function() {

    var modalForm = this.state.signIn ? <LogIn closeModal={this.closeModal}/> : <SignUp closeModal={this.closeModal}/>;

    if (this.state.errors.length > 0) {
      var errors = <Errors errors={this.state.errors}/>;
    }

    if (this.state.currentUser) {
      var sessionButtons = <div className="session-buttons"><LogOut/></div>;
    } else {
      sessionButtons =
      <div className="session-buttons">
        <span className="nav-session-button"
          onClick={this.openModal.bind(this, true)}>
          Login
        </span>
        <span className="nav-session-button"
          onClick={this.openModal.bind(this, false)}>
          Sign Up
        </span>
      </div>;
    }
    return (
      <nav>
        <div className="nav-elements">
          <span id="nav-logo">Logo</span>
          {sessionButtons}
          <Modal isOpen={this.state.modalOpen}
                  onRequestClose={this.closeModal}
                  style={SessionModalStyle}
                  onAfterOpen={this.onModalOpen}
                  >
            <div className="modal">
              {errors}
              {modalForm}
            </div>
          </Modal>
        </div>
      </nav>
    );
  }
});

module.exports = Navbar;
