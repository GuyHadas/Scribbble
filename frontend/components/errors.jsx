var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;


var Errors = React.createClass({

  render: function() {
    var errorsList = this.props.errors.map(function(error) {
      return <li>{error}</li>;
    });

    return (
      <ul>
        {errorsList}
      </ul>
    );
  }
});

module.exports = Errors;
