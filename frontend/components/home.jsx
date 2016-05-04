var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var UserStore = require("../stores/userStore");
var ClientActions = require("../actions/clientActions.js");

var Login = require("./login.jsx");
var Logout = require("./logout.jsx");
var SignUp = require("./signup.jsx");
var HomeVideo = require("./homeVideo.jsx");

var Home = React.createClass({

  getInitialState: function(){
    return { currentUser: UserStore.currentUser() };
  },

  componentDidMount: function() {
    this.userStoreListener = UserStore.addListener(this.__onChange);
    if (this.state.currentUser) {
      HashHistory.push("/designs");
    }
    $('body').addClass("hidden-overflow");
  },

  componentDidUpdate: function() {
    if (this.state.currentUser) {
      HashHistory.push("/designs");
    }
  },

  componentWillUnmount: function() {
    this.userStoreListener.remove();
    $('body').removeClass("hidden-overflow");
  },

  __onChange: function() {
    this.setState({currentUser: UserStore.currentUser()});
  },

  render: function() {

    return (
      <div className="splash-main">
        <HomeVideo />
        <div className="splash-main-header">
          <img src="Scribbble-outline.svg" />
          <span className="tagline"><img src="Tagline-outline.svg" /></span>
        </div>
      </div>
    );
  }
});

module.exports = Home;
