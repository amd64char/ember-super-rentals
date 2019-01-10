import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  owner: DS.attr('string'),
  city: DS.attr('string'),
  category: DS.attr('string'),
  image: DS.attr('string'),
  bedrooms: DS.attr('number'),
  description: DS.attr('string')
});
