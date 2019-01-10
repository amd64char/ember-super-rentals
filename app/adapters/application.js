import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  /*
    Our update to mirage/config.js configures Mirage so that whenever Ember Data makes a GET request to /api/rentals, Mirage will return this JSON
    and no network request is actually made. 
    
    We also specified a namespace of /api in our mirage configuration. 
    Without this change, navigation to /rentals in our application would conflict with Mirage.
    
    In order for this to work, we need our application to default to making requests to the namespace of /api
  */
  namespace: 'api'
});
