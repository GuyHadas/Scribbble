var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;
var Modal = require("react-modal");

var UserStore = require("../stores/userStore.js");


var Navbar = React.createClass({

  getInitialState: function() {
    return {currentUser: UserStore.currentUser()};
  },

  componentDidMount: function() {
    this.userStoreListener = UserStore.addListener(this.__onChange);
  },

  componentWillUnmount: function() {
    this.userStoreListener.remove();
  },

  __onChange: function() {
    this.setState({currentUser: UserStore.currentUser()});
  },

  render: function() {
    if (this.state.currentUser) {
      var sessionButtons = <div className="nav-session-buttons">Logout</div>;
    } else {
      sessionButtons = <div className="nav-session-buttons">Login SignUp</div>;
    }
    return (
      <nav>
        <div className="nav-elements">
          <span id="nav-logo">Logo</span>
          {sessionButtons}
        </div>
      </nav>
    );
  }
});

module.exports = Navbar;
