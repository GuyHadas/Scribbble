var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var DesignStore = require("../stores/designStore.js");
var ClientActions = require("../actions/clientActions.js");
var UserStore = require("../stores/userStore.js");
var DesignStore = require("../stores/designStore.js");

var Comment = require("./comment.jsx");
var CommentForm = require("./commentForm.jsx");

var Tour = require("../tour.js");

var DesignShow = React.createClass({
  getInitialState: function() {
    var design = DesignStore.find(this.props.params.designId);
    return {
      design: design ? design : {},
      currentUser: UserStore.currentUser(),
      commentPos: [],
      commentFormOpen: false,
      commentFormPos: [],
    };
  },

  componentDidMount: function() {
    this.designStoreListener = DesignStore.addListener(this.__onDesignChange);
    this.userStoreListener = UserStore.addListener(this.__onUserChange);
    ClientActions.fetchDesigns();
    ClientActions.getDesign(this.props.params.designId);

    this.backgroundColor = this.randomBackgroundColor();

    if (!this.state.currentUser) {
      HashHistory.push("/");
    }

    $('body').scrollTop(0);
    $('body').on('keydown', this.handleKey);
  },

  handleKey: function(e) {
    switch (e.which) {
      case 37: {
        //left
        this.prevDesignHandler();
        break;
      }
      case 39: {
        //right
        this.nextDesignHandler();
        break;
      }
      case 27: {
        //esc
        HashHistory.push("/");
        break;
      }
    }
  },

  componentWillUnmount: function() {
    this.designStoreListener.remove();
    this.userStoreListener.remove();
    Tour.cancel();
    $('body').off('keydown', this.handleKey);
  },

  __onDesignChange: function() {
    var design = DesignStore.find(this.props.params.designId);
    if (this.state.design.comments) {
      if (design.comments.length > this.state.design.comments.length) {
        this.closeCommentForm();
      }
    }
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

  startTour: function() {
    Tour.start();
  },

  componentWillReceiveProps: function() {
    ClientActions.fetchDesigns();
    ClientActions.getDesign(this.props.params.designId);
    if (this.state.commentFormOpen) {
      this.setState({ commentFormOpen: false });
    }
    this.backgroundColor = this.randomBackgroundColor();
    this.unshowComment();
  },

  prevDesignHandler: function() {
    var prevDesignIdx = this.designs.indexOf(this.state.design) - 1;
    if (prevDesignIdx < 0) {
      var prevDesignId = this.designs[this.designs.length - 1].id.toString();
    } else {
      prevDesignId = this.designs[prevDesignIdx].id.toString();
    }

    HashHistory.push("/designs/" + prevDesignId);
  },

  nextDesignHandler: function() {
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

  showComment: function(coords) {
    this.setState({ commentPos: coords});
  },

  unshowComment: function() {
    this.setState({ commentPos: [] });
  },

  openCommentForm: function(e) {
    $('body').off('keydown', this.handleKey);

    this.xPos = Math.floor(e.pageX - $("#design-img").offset().left);
    this.yPos = Math.floor(e.pageY - $("#design-img").offset().top);

    this.setState({
      commentFormOpen: true,
      commentFormPos: [this.xPos, this.yPos]
    });
  },

  closeCommentForm: function() {
    this.setState({ commentFormOpen: false});
    $('body').on('keydown', this.handleKey);
  },

  render: function() {
    if (this.state.design.comments) {
      var self = this;
      var commentsList = this.state.design.comments.map(function(comment) {
        return <Comment
          key={comment.id}
          comment={comment}
          showComment={self.showComment}
          unshowComment={self.unshowComment}/>;
      });
    }

    if (this.state.design.design_url) {
      if (!this.state.commentFormOpen) {
        var designImgShadow = "0px 6px 20px 0px rgba(0,0,0,0.75)";
      }
      var designImage = <img
        id="design-img"
        src={this.state.design.design_url}
        onClick={this.openCommentForm}
        style={{boxShadow: designImgShadow}}
      />;
    }

    if (this.state.commentPos.length > 0) {
      //adjust position for image size
      var left = this.state.commentPos[0] - 13;
      var top = this.state.commentPos[1] - 25;

      var commentPin = <img
        src="yellowPin.svg"
        id="yellow-comment-pin"
        className="hvr-pulse"
        style={{
          width: "25px",
          height: "25px",
          left: left,
          top: top,
          position: "absolute",
        }}/>;
    } else {
      commentPin = <img
        src="yellowPin.svg"
        id="yellow-comment-pin"
        className="hvr-pulse"
        style={{
          opacity: "0",
          width: "25px",
          height: "25px",
          left: 0,
          top: 0,
          position: "absolute",
        }}/>;
    }

    if (this.state.commentFormOpen) {
      var commentForm = <CommentForm
        closeCommentForm={this.closeCommentForm}
        xPos={this.xPos}
        yPos={this.yPos}
        designId={this.state.design.id}
        userId={this.state.currentUser.user.id}
        />;
      //adjust position for image size
      var leftFormPin = this.state.commentFormPos[0] - 13;
      var topFormPin = this.state.commentFormPos[1] - 25;
      var commentFormPin = <img
        className="hvr-pulse"
        src="greenPin.svg"
        style={{
          width: "25px",
          height: "25px",
          left: leftFormPin,
          top: topFormPin,
          position: "absolute",
        }}/>;
      var designUrlShadow = "0px 6px 20px 0px rgba(0,0,0,0.75)";
    }

    return (
      <div className="design-show"
        style={
          {
            backgroundColor: this.backgroundColor
          }
        }>

        <div className="design-show-back">
          <div className="back-to-index-btn" onClick={this.backToIndex}>Back</div>
            <div className="explore-features-btn" onClick={this.startTour}>Explore Features</div>
        </div>

        <div className="main-design-show">
          <div className="left-design" onClick={this.prevDesignHandler}>
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
              {commentsList}
            </ul>
          </div>

          <div className="design-url-show" style={ { boxShadow: designUrlShadow }}>
            {commentPin}
            {commentFormPin}
            {designImage}
            {commentForm}
          </div>

          <div className="right-design" onClick={this.nextDesignHandler}>
            <img className="right-arrow" src="rightArrow.png"/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DesignShow;
