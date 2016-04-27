var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var UserStore = require("../stores/userStore");
var ErrorStore = require('../stores/errorStore.js');
var ClientActions = require("../actions/clientActions.js");

var Login = require("./login.jsx");
var Logout = require("./logout.jsx");
var SignUp = require("./signup.jsx");
var Errors = require("./errors.jsx");

var Home = React.createClass({

  getInitialState: function(){
    return { currentUser: null, errors: ErrorStore.all() };
  },

  componentDidMount: function() {
    this.userStoreListener = UserStore.addListener(this.__onChange);
    this.errorStoreListener = ErrorStore.addListener(this.__onChange);
    ClientActions.fetchCurrentUser();
  },

  componentWillUnmount: function() {
    this.userStoreListener.remove();
    this.errorStoreListener.remove();
  },

  __onChange: function() {
    this.setState({currentUser: UserStore.currentUser(), errors: ErrorStore.all()});
  },

  render: function() {

    if (this.state.errors.length > 0) {
      var errors = <Errors errors={this.state.errors}/>;
    }

    return (
      <div>
        {errors}
      </div>
    );
  }
});

module.exports = Home;
