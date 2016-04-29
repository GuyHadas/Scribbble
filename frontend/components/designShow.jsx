var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var DesignStore = require("../stores/designStore.js");

var DesignShow = React.createClass({
  // getInitialState: function() {
  //
  // },

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

  render: function() {
    var design = DesignStore.find(this.props.designId);

    return (
      <div className="design-show">
        <div className="design-show-top">
          <div className="design-url-show">
            <img src={design.design_url} />
          </div>
          <div className="design-details">
            <div className="design-title">{design.title}</div>
            <div className="design-desc">{design.description}</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DesignShow;
