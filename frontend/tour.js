var Shepherd = require('tether-shepherd');

var Tour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-default',
  }
});

Tour.addStep('hoverComment', {
  title: 'Hover Over Comments',
  text: 'Hover over a comment to view where it lives on the design.',
  attachTo: '.design-details-card bottom',
  advanceOn: 'clickComment'
});

Tour.addStep('clickComment', {
  title: 'Click on a Comment',
  text: 'Click on a comment to keep its pin on the design.',
  attachTo: '.design-details-card left',
  advanceOn: 'createComment'
});

Tour.addStep('clickComment', {
  title: 'Create a Comment',
  text: 'Click anywhere on the design to make a comment at that location.',
  attachTo: '.design-url-show top',
  advanceOn: 'createComment'
});


module.exports = Tour;
