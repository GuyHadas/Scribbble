var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;
var Modal = require("react-modal");


var DesignStore = require("../stores/designStore.js");
var ClientActions = require("../actions/clientActions.js");
var UserStore = require("../stores/userStore.js");

var DesignCard = require("./designCard.jsx");
var DesignShow = require("./designShow.jsx");

var DesignFormModalStyle = require("../misc/design_form_modal_style.js");


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
      HashHistory.push("/designs/" + this.props.params.designId);
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
    console.log("beign updated");
    if (!this.state.currentUser) {
      HashHistory.push("/");
    }
  },

  componentWillReceiveProps: function() {
    if (this.props.params.designId) {
      HashHistory.push("/designs/" + this.props.params.designId);
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

    // var modalContent = <DesignForm />;
      var modalContent;
    return (
      <ul className="design-index-list">
        {designIndexList}
        <Modal isOpen={this.state.modalOpen}
                onRequestClose={this.closeModal}
                style={DesignFormModalStyle}
                >
          <div className="modalDisplayForm">
            {modalContent}
          </div>
        </Modal>
      </ul>
    );
  }
});

module.exports = DesignIndex ;
