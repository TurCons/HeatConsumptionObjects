import Ember from 'ember';
import MasterPageInitializer from 'ember-app/initializers/master-page';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | master page', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  MasterPageInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
