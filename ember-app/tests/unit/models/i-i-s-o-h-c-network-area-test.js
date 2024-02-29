import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-o-h-c-network-area', 'Unit | Model | i-i-s-o-h-c-network-area', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-o-h-c-building',
    'model:i-i-s-o-h-c-consumer',
    'model:i-i-s-o-h-c-heat-consumption-object',
    'model:i-i-s-o-h-c-network-area',
    'model:i-i-s-o-h-c-network-section'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
