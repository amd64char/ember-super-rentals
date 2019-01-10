import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  className: ['map-container'],
  mapElement: service(),

  didInsertElement() {
    this._super(...arguments);
    // Location parameter will be passed in from rental-listing as rental.city
    this.mapElement.getMapElement(this.location).then((mapResult) => {
      this.element.append(mapResult);
    });
  }

});
