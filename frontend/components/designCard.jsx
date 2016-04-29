var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var DesignCard = React.createClass({


  render: function() {
    return (
      <li className="design-card">
        <div className="design-url-index-item"><img  src={this.props.design.design_url}/></div>
      </li>
    );
  }
});

module.exports = DesignCard;

// getInitialState: function() {
//
// },
//
// componentDidMount: function() {
//
// },
//
// componentWillUnmount: function() {
//
// },
//
// __onChange: function() {
//
// },
