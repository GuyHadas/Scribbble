var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var ClientActions = require("../actions/clientActions.js");

var UploadImage = require("./uploadImage.jsx");


var DesignForm = React.createClass({
  getInitialState: function() {
    return { title: "", description: "", images: []};
  },

  componentDidMount: function() {
    var self = this;
    setTimeout(function() {
      ReactDOM.findDOMNode(self.refs.autoFocus).focus(); },
      500);
  },

  titleChange: function(e) {
    e.preventDefault();
    this.setState({ title: e.target.value });
  },

  descriptionChange: function(e) {
    e.preventDefault();
    this.setState({ description: e.target.value });
  },

  submitHandler: function(e) {
    e.preventDefault();
    ClientActions.createDesign({
      title: this.state.title,
      description: this.state.description,
      design_url: this.state.design_url
    });
  },

  imageUrlUpload: function(url) {
    this.setState({ design_url: url});
  },

  render: function() {

    return (
      <form className="design-form" onSubmit={this.submitHandler}>
        <input
          type="text"
          className="formTextbox"
          ref="autoFocus"
          value={this.state.title}
          onChange={this.titleChange}
          placeholder="Title"
          />

        <textarea className="formTextarea"
          value={this.state.description}
          onChange={this.descriptionChange}
          placeholder="Description"></textarea>

        <UploadImage imageUrlUpload={this.imageUrlUpload} />;

        <input type="submit" value="New Design"/>

      </form>
    );
  }
});


module.exports = DesignForm;
