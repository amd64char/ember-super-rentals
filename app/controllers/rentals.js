import Controller from '@ember/controller';

export default Controller.extend({
  // When the user types in the text field in our component, the filterByCity action in the controller is called.
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.store.query('rental', { city: param }).then((results) => {
          return { query: param, results: results};
        });
      } else {
        return this.store.findAll('rental').then((results) => {
          return { query: param, results: results };
        });
      }
    }
  }
});
