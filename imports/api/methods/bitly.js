import Bitly from 'bitly';
const bitly = new Bitly( Meteor.settings.private.bitly );

Meteor.methods({
  getBitlyUrl( url ) {
      return bitly.shorten( url ).then( ( response ) => {
        return response.data.url;
      });
    
  }
});