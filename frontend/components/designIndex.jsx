var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var DesignStore = require("../stores/designStore.js");
var ClientActions = require("../actions/clientActions.js");

var DesignIndex = React.createClass({

  getInitialState: function() {
    return { designs: DesignStore.all() };
  },

  componentDidMount: function() {
    this.designStoreListener = DesignStore.addListener(this.__onChange);
    ClientActions.fetchDesigns();
  },

  __onChange: function() {
    this.setState({designs: DesignStore.all()});
  },

  componentWillUnmount: function() {
    this.designStoreListener.remove();
  },

  render: function() {

    return (
      <ul>
        DESIGN INDEX
      </ul>
    );
  }
});

module.exports = DesignIndex ;
