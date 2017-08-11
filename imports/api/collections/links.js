import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
// Required AutoForm setup
SimpleSchema.extendOptions(['autoform']);
SimpleSchema.debug = true;

Links = new Mongo.Collection("links");

Links.allow({
'insert': function (doc) {
  
  /*return true to allow insert */
  return true; 
}
});

LinksSchema = new SimpleSchema({
  url: {
    type: String,
    label: 'Input',
    regEx: SimpleSchema.RegEx.Url,
    index: true,
    unique: true,
     autoform: {
      afFieldInput: {
      type: "url",
      placeholder: "Place your links here...",
    }
    }
  },
  encodedUrl: {
      type: String,
      optional: true,
      autoValue: function() {
        var url = this.field("url");
        
       if (url.isSet) {
       return Meteor.call("getBitlyUrl", url.value );
       } else {
           this.unset();
       }
        }
  } 
   
}, { tracker: Tracker });

Links.attachSchema(LinksSchema);
