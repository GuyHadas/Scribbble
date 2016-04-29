var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var DesignStore = require("../stores/designStore.js");
var ClientActions = require("../actions/clientActions.js");

var DesignShow = React.createClass({
  getInitialState: function() {
    var design = DesignStore.find(this.props.params.designId);
    return {design: design ? design : {}};
  },

  componentDidMount: function() {
    this.designStoreListener = DesignStore.addListener(this.__onChange);
    ClientActions.getDesign(this.props.params.designId);
  },

  componentWillUnmount: function() {
    this.postStoreListener.remove();
  },

  __onChange: function() {
    var design = DesignStore.find(this.props.params.designId);
    this.setState({design: design ? design : {}});
  },

  render: function() {
    return (
      <div className="design-show">
          <div className="design-details-card">
            <div className="details-box">
              <div className="design-username">{this.state.design.username}</div>
              <div className="design-title">{this.state.design.title}</div>
              <div className="design-desc">{this.state.design.description}</div>
            </div>
            <ul className="comments-list">
              <li className="comment">Wow what a dope picture dude such awesome work!</li>
              <li className="comment">I think the purple doesn't really work right here.</li>
              <li className="comment">This project is really cool, but still unfinished.</li>
            </ul>
          </div>

          <div className="design-url-show">
            <img src={this.state.design.design_url} />
          </div>
      </div>
    );
  }
});

module.exports = DesignShow;
