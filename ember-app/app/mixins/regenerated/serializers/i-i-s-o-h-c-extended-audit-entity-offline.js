import Ember from 'ember';

export let OfflineSerializer = Ember.Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      user: { serialize: 'odata-id', deserialize: 'records' },
      objectType: { serialize: 'odata-id', deserialize: 'records' },
      auditFields: { serialize: false, deserialize: 'records' },
    };

    return Ember.$.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
