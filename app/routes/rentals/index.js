import Route from '@ember/routing/route';

export default Route.extend({
  
  model() {
    // Call the findAll function on the store and provide it with the name of our rental model class.
    return this.store.findAll('rental')
  }

});
