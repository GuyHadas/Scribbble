var Shepherd = require('tether-shepherd');

var Tour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-default',
  }
});

var defaultButtons = [
  {
    text: "Back",
    action: Tour.back
  },

  {
    text: "Next",
    action: Tour.next
  },
];

Tour.addStep('hoverComment', {
  title: 'Hover Over Comments',
  text: 'Hover over a comment to view where it lives on the design.',
  attachTo: '.design-details-card bottom',
  showCancelLink: true,
  buttons: [
    {
      text: "Next",
      action: Tour.next
    },
  ]});

Tour.addStep('clickComment', {
  title: 'Click on a Comment',
  text: 'Click on a comment to keep its pin on the design. Rehover comments to remove pin.',
  attachTo: '.design-details-card left',
  showCancelLink: true,
  buttons: defaultButtons
});

Tour.addStep('createComment', {
  title: 'Create a Comment',
  text: 'Click anywhere on the design to make a comment at that location.',
  attachTo: '.design-url-show top',
  advanceOn: 'createComment',
  showCancelLink: true,
  buttons: [
    {
      text: "Back",
      action: Tour.back
    },
    {
      text: "Done",
      action: Tour.complete
    }
  ]
});


module.exports = Tour;
