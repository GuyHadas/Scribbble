var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var HomeVideo = React.createClass({

  render: function() {
    var root = "https://s3-us-west-2.amazonaws.com/scribbble/scribbble-bg-vid-small.mp4";


    return (
      <div className="fullscreen">
        <video autoPlay muted loop preload className="back-video">
         <source src={ root } type="video/mp4" />
         <source src={ root } type="video/webm" />
         <source src={ root } type="video/ogg" />
          Your browser does not support the <code>video</code> tag.
        </video>
      </div>
    );
  }
});

module.exports = HomeVideo;
