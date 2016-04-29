var SessionModalStyle = {
  overlay : {
    backgroundColor : 'rgba(30,30,30,0.85)',
    zIndex          : 10,
  },

  content : {
    position        : 'fixed',
    top             : '10%',
    bottom          : '10%',
    left            : '20%',
    right           : '20%',
    display         : 'flex',
    flexDirection   : 'column',
    justifyContent  : 'center',
    alignItems      : 'center',
    borderRadius    :  '30px',
    padding         : '20px',
    zIndex          : '11',
    minHeight       : '600px',
  }
};

module.exports = SessionModalStyle;

// opacity         : '0',
// transition      : 'opacity 1.5s',
