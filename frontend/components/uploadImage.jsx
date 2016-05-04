var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var UploadImage = React.createClass({

  upload: function(e) {
    e.preventDefault();
    var self = this;
    cloudinary.openUploadWidget(window.CLOUDINARY_OPTIONS,
    function(error, images) {
      if ( error === null ) {
        //upload successful
        var url = images[0].url;
        self.props.imageUrlUpload(url);
      }
    });
  },

  render: function() {
    return (
      <div className="form-image-drop" onClick={this.upload}>Click to Upload Design</div>
    );
  }
});

module.exports = UploadImage;
