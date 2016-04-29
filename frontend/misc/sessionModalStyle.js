// SessionModalStyle.overlay.backgroundColor = 30,30,0.85)';

var SessionModalStyle = {
  overlay : {
    backgroundColor : 'rgba(30,30,30,0.85)',
    zIndex          : 10,
  },

  content : {
    position        : 'fixed',
    top             : '25%',
    bottom          : '25%',
    left            : '40%',
    right           : '40%',
    display         : 'flex',
    flexDirection   : 'column',
    justifyContent  : 'center',
    alignItems      : 'center',
    borderRadius    :  '30px',
    backgroundColor : '#F4F4F4',
    padding         : '20px',
    zIndex          : '11',
    opacity         : '0',
    transition      : 'opacity 1.5s',
    minHeight       : '250px',
  }
};

module.exports = SessionModalStyle;