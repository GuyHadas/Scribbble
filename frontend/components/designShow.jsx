var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var DesignStore = require("../stores/designStore.js");
var ClientActions = require("../actions/clientActions.js");
var UserStore = require("../stores/userStore.js");

var DesignShow = React.createClass({
  getInitialState: function() {
    var design = DesignStore.find(this.props.params.designId);
    return { design: design ? design : {}, currentUser: UserStore.currentUser() };
  },

  componentDidMount: function() {
    this.designStoreListener = DesignStore.addListener(this.__onDesignChange);
    this.userStoreListener = UserStore.addListener(this.__onUserChange);
    ClientActions.getDesign(this.props.params.designId);

    if (!this.state.currentUser) {
      HashHistory.push("/");
    }
  },

  componentWillUnmount: function() {
    this.postStoreListener.remove();
    this.userStoreListener.remove();
  },

  __onDesignChange: function() {
    var design = DesignStore.find(this.props.params.designId);
    this.setState({design: design ? design : {}});
  },

  __onUserChange: function() {
    this.setState({ currentUser: UserStore.currentUser() });
  },

  componentDidUpdate: function() {
    if (!this.state.currentUser) {
      HashHistory.push("/");
    }
  },

  render: function() {
    return (
      <div className="design-show">

        <div className="design-details-card">
          <div className="details-box">
            <div className="details-title-username-info">
              <div className="design-title">{this.state.design.title}</div>
              <div>by <span className="design-username">
                {this.state.design.username}
                </span>
              </div>
            </div>
            <div className="design-desc">{this.state.design.description}</div>
          </div>
          <ul className="comments-list">
            <li className="comment">Wow what a dope picture dude such awesome work!</li>
            <li className="comment">I think the purple doesn't really work right here.</li>
            <li className="comment">This project is really cool, but still unfinished.</li>
            <li className="comment">I am not really sure what you were going for I think it is nice but can be a lot better. The lighting is all off and the colors don't work with one another.</li>
            <li className="comment">This is soooooo ugly ewww.</li>
            <li className="comment">Yeah wow nice for sure.</li>
            <li className="comment">This project is really cool, but still unfinished.</li>
            <li className="comment">This project is really cool, but still unfinished.</li>
            <li className="comment">This project is really cool, but still unfinished.</li>
            <li className="comment">This project is really cool, but still unfinished.</li>
            <li className="comment">This project is really cool, but still unfinished.</li>
            <li className="comment">This project is really cool, but still unfinished.</li>
            <li className="comment">This project is really cool, but still unfinished.</li>
            <li className="comment">This project is really cool, but still unfinished.</li>
            <li className="comment">This project is really cool, but still unfinished.</li>
            <li className="comment">This project is really cool, but still unfinished.</li>
          </ul>
        </div>

        <div className="design-url-show">
          <img src={this.state.design.design_url} />
          <div className="comment-form-box">
            <span className="comment-form">Comment form goes here...</span>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = DesignShow;
