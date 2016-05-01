var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var DesignStore = require("../stores/designStore.js");
var ClientActions = require("../actions/clientActions.js");
var UserStore = require("../stores/userStore.js");
var DesignStore = require("../stores/designStore.js");

var DesignShow = React.createClass({
  getInitialState: function() {
    var design = DesignStore.find(this.props.params.designId);
    return { design: design ? design : {}, currentUser: UserStore.currentUser() };
  },

  componentDidMount: function() {
    this.designStoreListener = DesignStore.addListener(this.__onDesignChange);
    this.userStoreListener = UserStore.addListener(this.__onUserChange);
    ClientActions.getDesign(this.props.params.designId);
    ClientActions.fetchDesigns();

    if (!this.state.currentUser) {
      HashHistory.push("/");
    }
  },

  componentWillUnmount: function() {
    this.designStoreListener.remove();
    this.userStoreListener.remove();
  },

  __onDesignChange: function() {
    var design = DesignStore.find(this.props.params.designId);
    this.setState({ design: design ? design : {} });
    this.designs = DesignStore.all();
  },

  __onUserChange: function() {
    this.setState({ currentUser: UserStore.currentUser() });
  },

  componentDidUpdate: function() {
    if (!this.state.currentUser) {
      HashHistory.push("/");
    }
  },

  componentWillReceiveProps: function() {
    ClientActions.getDesign(this.props.params.designId);
    ClientActions.fetchDesigns();
  },

  leftDesignHandler: function() {
    var prevDesignIdx = this.designs.indexOf(this.state.design) - 1;
    if (prevDesignIdx < 0) {
      var prevDesignId = this.designs[this.designs.length - 1].id.toString();
    } else {
      prevDesignId = this.designs[prevDesignIdx].id.toString();
    }

    HashHistory.push("/designs/" + prevDesignId);
  },

  rightDesignHandler: function() {
    var nextDesignIdx = this.designs.indexOf(this.state.design) + 1;

    if (nextDesignIdx === this.designs.length) {
      var nextDesignId = this.designs[0].id;
    } else {
      nextDesignId = this.designs[nextDesignIdx].id.toString();
    }

    HashHistory.push("/designs/" + nextDesignId);
  },

  randomBackgroundColor: function() {
    var colorOptions = [
      "rgba(154, 203, 253, 0.6)", //baby-blue
      "rgba(247, 123, 16, 0.4)", //organge-yellow
      "rgba(166, 215, 183, 0.7)", //aquagreen
      "rgba(61, 44, 83, 0.5)", //purple
      "rgba(251, 240, 153, 0.5)", //yellow
      "rgba(59, 96, 172, 0.5)", //blue
      "rgba(101, 168, 157, 0.6)", //aquablue
    ];

    var randomPos = Math.floor(Math.random() * colorOptions.length);
    return colorOptions[randomPos];
  },

  backToIndex: function() {
    HashHistory.push("/designs");
  },

  render: function() {
    return (
      <div className="design-show"
        style={
          {
            backgroundColor: this.randomBackgroundColor()
          }
        }>

        <div className="design-show-back">
          <div className="back-to-index-btn" onClick={this.backToIndex}>Designs</div>
        </div>

        <div className="main-design-show">
          <div className="left-design" onClick={this.leftDesignHandler}>
            <img className="left-arrow" src="leftarrow.png"/>
          </div>

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

          <div className="right-design" onClick={this.rightDesignHandler}>
            <img className="right-arrow" src="rightArrow.png"/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DesignShow;
