import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    /*
      Since we added :rental_id to the show path in our router, rental_id is now available in our model hook. 
      When we call this.store.findRecord('rental', params.rental_id), Ember Data queries /rentals/our-id using a HTTP GET request
    */
    return this.store.findRecord('rental', params.rental_id);
  }
});
