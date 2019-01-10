import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should show rentals as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });

  test('should link to information about the company.', async function (assert) {
    await visit('/');
    await click('.menu-about');
    assert.equal(currentURL(), '/about', 'should navigate to about us page');
  });

  test('should link to contact information.', async function (assert) {
    await visit('/');
    await click('.menu-contact');
    assert.equal(currentURL(), '/contact', 'should navigate to the contact us page');
  });

  test('should list available rentals.', async function (assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
  });

  test('should filter the list of rentals by city.', async function (assert) {

  });

  test('should show details for a selected rental', async function (assert) {
    await visit('/rentals');
    await click(".grand-old-mansion");
    assert.equal(currentURL(), '/rentals/grand-old-mansion', "should navigate to show route");
    assert.ok(this.element.querySelector('.show-listing h2').textContent.includes("Grand Old Mansion"), 'should list rental title');
    assert.ok(this.element.querySelector('.show-listing .description'), 'should list a description of the property');
  });
  
  /*
  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
  */
});
