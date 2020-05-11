var Shepherd = require('shepherd.js');

var Tour = new Shepherd.Tour({
  defaultStepOptions: {
    classes: 'shepherd-theme-default',
    cancelIcon: {
      enabled: true
    },
    scrollTo: { behavior: 'smooth', block: 'center' }
  }
});

var defaultButtons = [
  {
    text: "Back",
    action() {
      return this.back()
    } 
  },

  {
    text: "Next",
    action() {
      return this.next()
    } 
  },
];

Tour.addStep({
  id: 'hoverComment',
  title: 'Hover Over Comments',
  text: 'Hover over a comment to view where it lives on the design.',
  attachTo: {
      element: '.design-details-card',
      on: 'bottom'
  },
  buttons: [
    {
      text: "Next",
      action() {
          return this.next()
      }
    },
  ]});

Tour.addStep({
  id: 'clickComment',
  title: 'Click on a Comment',
  text: 'Click on a comment to keep its pin on the design. Rehover comments to remove pin.',
  attachTo: {
      element: '.design-details-card',
      on: 'left'
  },
  buttons: defaultButtons
});

Tour.addStep({
  id: 'createComment',
  title: 'Create a Comment',
  text: 'Click anywhere on the design to make a comment at that location.',
  attachTo: {
    element: '.design-url-show',
    on: 'left'
  },
  // advanceOn: 'createComment',
  buttons: [
    {
      text: "Back",
      action() {
        return this.back()
      } 
    },
    {
      text: "Done",
      action() {
        return this.complete()
      }
    }
  ]
});


module.exports = Tour;
