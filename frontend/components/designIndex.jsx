var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var DesignStore = require("../stores/designStore.js");
var ClientActions = require("../actions/clientActions.js");
var UserStore = require("../stores/userStore.js");

var DesignCard = require("./designCard.jsx");

var DesignIndex = React.createClass({

  getInitialState: function() {
    return { designs: DesignStore.all(), currentUser: UserStore.currentUser() };
  },

  componentDidMount: function() {
    this.designStoreListener = DesignStore.addListener(this.__onDesignsChange);
    this.userStoreListener = UserStore.addListener(this.__onUserChange);
    ClientActions.fetchDesigns();
    if (!this.state.currentUser) {
      HashHistory.push("/");
    }
  },

  __onDesignsChange: function() {
    this.setState({designs: DesignStore.all()});
  },

  __onUserChange: function() {
    this.setState({ currentUser: UserStore.currentUser() });
  },

  componentWillUnmount: function() {
    this.designStoreListener.remove();
    this.userStoreListener.remove();
  },

  componentDidUpdate: function() {
    if (!this.state.currentUser) {
      HashHistory.push("/");
    }
  },

  render: function() {
    var designIndexList = this.state.designs.map(function(design) {
      return <DesignCard key={design.id} design={design}/>;
    });
    return (
      <ul className="design-index-list">
        {designIndexList}
      </ul>
    );
  }
});

module.exports = DesignIndex ;
