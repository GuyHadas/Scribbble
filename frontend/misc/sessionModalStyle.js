// SessionModalStyle.overlay.backgroundColor = 30,30,0.85)';

var SessionModalStyle = {
  overlay : {
    position        : "fixed",
    backgroundColor : 'rgba(30,30,30,0.85)',
    zIndex          : 10,
    display         : "flex",
    justifyContent  : 'center',
    alignItems      : 'center',
    height          : "100vh",
  },

  content : {
    position        : "relative",
    left            : "0px",
    right           : "0px",
    top             : "0px",
    bottom          : "0px",
    width           : "360px",
    height          : "260px",
    display         : 'flex',
    flexDirection   : 'column',
    justifyContent  : 'center',
    alignItems      : 'center',
    borderRadius    :  '4px',
    backgroundColor : '#F4F4F4',
    padding         : '20px',
    zIndex          : '11',
    opacity         : '0',
    transition      : 'opacity 1.5s',
    minHeight       : '260px',
    minWidth        : '360px',
    boxShadow       : "0px 6px 20px 0px rgba(0,0,0,0.75)",
  }
};

module.exports = SessionModalStyle;
