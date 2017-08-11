import './panel.html'

Template.panel.onCreated(function() {
  var self = this;
  self.autorun(function() {
      self.subscribe('displayLinks');
  })
});

Template.panel.helpers({
     links: () => {
         return Links.find({});
     }
});
