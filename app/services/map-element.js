import { camelize } from '@ember/string';
import Service from '@ember/service';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Service.extend({
  geocode: service(),
  map: service(),

  init() {
    // If a map already exists for the given location and use that one
    if (!this.cachedMaps) {
      set(this, 'cachedMaps', {});
    }
    this._super(...arguments);
  },

  async getMapElement(location) {
    let camelizedLocation = camelize(location);
    let element = this.cachedMaps[camelizedLocation];
    
    // Test if we have a cached map element
    if (!element) {
      // We will create a new HTML element and call our Leaflet map service to render a map to it.
      element = this.createLeafletElement();
      let geocodedLocation = await this.geocode.fetchCoordinates(location);
      this.map.createMap(element, geocodedLocation);
      // cache map element
      this.cachedMaps[camelizedLocation] = element;
    }

    return element;
  },

  createLeafletElement() {
    let element = document.createElement('div');
    element.className = 'map';
    return element;
  },
});
