Meteor.publish('displayLinks', function(){
    return Links.find({});
});