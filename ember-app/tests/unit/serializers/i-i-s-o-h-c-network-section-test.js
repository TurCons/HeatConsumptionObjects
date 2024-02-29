import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-o-h-c-network-section', 'Unit | Serializer | i-i-s-o-h-c-network-section', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-o-h-c-network-section',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-o-h-c-t-installation-type',
    'transform:i-i-s-o-h-c-t-section-type',

    'model:i-i-s-o-h-c-building',
    'model:i-i-s-o-h-c-consumer',
    'model:i-i-s-o-h-c-heat-consumption-object',
    'model:i-i-s-o-h-c-network-area',
    'model:i-i-s-o-h-c-network-section'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
