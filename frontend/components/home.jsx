var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var UserStore = require("../stores/userStore");
var ClientActions = require("../actions/clientActions.js");

var Login = require("./login.jsx");
var Logout = require("./logout.jsx");
var SignUp = require("./signup.jsx");

var Home = React.createClass({

  getInitialState: function(){
    return { currentUser: UserStore.currentUser() };
  },

  componentDidMount: function() {
    this.userStoreListener = UserStore.addListener(this.__onChange);
    ClientActions.fetchCurrentUser();
    if (this.state.currentUser) {
      HashHistory.push("/designs");
    }
  },

  componentDidUpdate: function() {
    if (this.state.currentUser) {
      HashHistory.push("/designs");
    }
  },

  componentWillUnmount: function() {
    this.userStoreListener.remove();
  },

  __onChange: function() {
    this.setState({currentUser: UserStore.currentUser()});
  },

  render: function() {

    return (
      <div>
      </div>
    );
  }
});

module.exports = Home;
