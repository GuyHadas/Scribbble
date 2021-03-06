var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var DesignCard = React.createClass({

  handleClick: function() {
    HashHistory.push("/designs/" + this.props.design.id);
  },

  render: function() {
    return (
      <li className="design-card" onClick={this.handleClick}>
        <div className="design-url-index-item"><img  src={this.props.design.design_url}/></div>
      </li>
    );
  }
});

module.exports = DesignCard;
