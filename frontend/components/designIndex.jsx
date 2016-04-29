var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;
var Modal = require("react-modal");


var DesignStore = require("../stores/designStore.js");
var ClientActions = require("../actions/clientActions.js");
var UserStore = require("../stores/userStore.js");

var DesignCard = require("./designCard.jsx");
var DesignShow = require("./designShow.jsx");

var DesignShowModalStyle = require("../misc/DesignShowModalStyle.js");


var DesignIndex = React.createClass({

  getInitialState: function() {
    return { designs: DesignStore.all(), currentUser: UserStore.currentUser(), modalOpen: false };
  },

  componentDidMount: function() {
    this.designStoreListener = DesignStore.addListener(this.__onDesignsChange);
    this.userStoreListener = UserStore.addListener(this.__onUserChange);
    ClientActions.fetchDesigns();

    if (!this.state.currentUser) {
      HashHistory.push("/");
    }

    if (this.props.params.designId) {
      this.openModal();
    }
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
      this.openModal();
    }
  },

  openModal: function() {
    this.setState({ modalOpen: true });
  },

  closeModal: function(){
    this.setState({ modalOpen: false});
  },

  render: function() {
    var designIndexList = this.state.designs.map(function(design) {
      return <DesignCard key={design.id}
                design={design}
              />;
    });

    var modalContent = <DesignShow designId={this.props.params.designId} />;

    return (
      <ul className="design-index-list">
        {designIndexList}
        <Modal isOpen={this.state.modalOpen}
                onRequestClose={this.closeModal}
                style={DesignShowModalStyle}
                >
          <div className="modalDisplayShow">
            {modalContent}
          </div>
        </Modal>
      </ul>
    );
  }
});

module.exports = DesignIndex ;
