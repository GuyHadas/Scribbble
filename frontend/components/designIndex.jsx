var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;
var Infinite = require('react-infinite');
var Masonry = require('react-masonry-component');



var DesignStore = require("../stores/designStore.js");
var ClientActions = require("../actions/clientActions.js");
var UserStore = require("../stores/userStore.js");

var DesignCard = require("./designCard.jsx");
var DesignShow = require("./designShow.jsx");



var DesignIndex = React.createClass({

  getInitialState: function() {
    return { designs: DesignStore.all(), currentUser: UserStore.currentUser() };
  },

  componentDidMount: function() {
    this.designStoreListener = DesignStore.addListener(this.__onDesignsChange);
    this.userStoreListener = UserStore.addListener(this.__onUserChange);
    ClientActions.fetchDesigns();

    if (!this.state.currentUser) {
      HashHistory.push("/");
    }

    if (this.props.params.designId) {
      HashHistory.push("/designs/" + this.props.params.designId);
    }

    $('body').scrollTop(0);
    console.log($('.infinite').children().addClass('design-index-list'));
  },

  __onDesignsChange: function() {
    this.setState({designs: DesignStore.all()});
  },

  __onUserChange: function() {
    this.setState({ currentUser: UserStore.currentUser() });
  },

  componentWillUnmount: function() {
    this.designStoreListener.remove();
    this.userStoreListener.remove();
  },

  componentDidUpdate: function() {
    if (!this.state.currentUser) {
      HashHistory.push("/");
    }
  },

  componentWillReceiveProps: function() {
    if (this.props.params.designId) {
      HashHistory.push("/designs/" + this.props.params.designId);
    }
  },

  render: function() {
    var designIndexList = this.state.designs.map(function(design) {
      return <DesignCard key={design.id} design={design}/>;
    });

    return (
    <ul className={"design-index-list"}>
      {designIndexList}
    </ul>
    );
  }
});

module.exports = DesignIndex ;

// <Infinite containerHeight={1500} className={"infinite"} elementHeight={100} useWindowAsScrollContainer={false}>
//     </Infinite>

// <Masonry
//           className={'design-index-list'} // default ''
//           elementType={'ul'} // default 'div'
//           options={{}} // default {}
//           disableImagesLoaded={false} // default false
//       >
