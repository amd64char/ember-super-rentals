import Route from '@ember/routing/route';

export default Route.extend({

  //route lifecycle hook to redirect user before execution of the current route
  beforeModel() {
    this.replaceWith('rentals');
  },
  
  model() {

  }

});
