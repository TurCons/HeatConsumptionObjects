import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  address: DS.attr('string'),
  resultSquare: DS.attr('number'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  /**
    Non-stored property.

    @property resultSquare_notStored
  */
  resultSquare_notStored: DS.attr('number'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'resultSquare_notStoredCompute' method in model class (outside of this mixin) if you want to compute value of 'resultSquare_notStored' property.

    @method _resultSquare_notStoredCompute
    @private
    @example
      ```javascript
      _resultSquare_notStoredChanged: Ember.on('init', Ember.observer('resultSquare_notStored', function() {
        Ember.run.once(this, '_resultSquare_notStoredCompute');
      }))
      ```
  */
  _resultSquare_notStoredCompute: function() {
    let result = (this.resultSquare_notStoredCompute && typeof this.resultSquare_notStoredCompute === 'function') ?
      this.resultSquare_notStoredCompute() : null;
    this.set('resultSquare_notStored', result);
  },
  networkArea: DS.belongsTo('i-i-s-o-h-c-network-area', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      networkArea: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export function defineNamespace(modelClass) {
  modelClass.reopenClass({
    namespace: 'IIS.OHC',
  });
}

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-i-s-o-h-c-building', {
    address: Projection.attr('Address', { index: 0 }),
    resultSquare: Projection.attr('Result square', { index: 1 }),
    networkArea: Projection.belongsTo('i-i-s-o-h-c-network-area', 'Network area', {
      areaName: Projection.attr('Area name', { index: 3 })
    }, { index: 2 }),
    createTime: Projection.attr('', { index: 4 }),
    creator: Projection.attr('', { index: 5 }),
    editTime: Projection.attr('', { index: 6 }),
    editor: Projection.attr('', { index: 7 })
  });
  modelClass.defineProjection('BuildingE', 'i-i-s-o-h-c-building', {
    networkArea: Projection.belongsTo('i-i-s-o-h-c-network-area', '', {
      areaName: Projection.attr('Район', { index: 1 })
    }, { index: 0 }),
    address: Projection.attr('Адрес', { index: 2 }),
    resultSquare: Projection.attr('Общая площадь', { index: 3 }),
    resultSquare_notStored: Projection.attr('Общая площадь не хранимая', { index: 4 })
  });
  modelClass.defineProjection('BuildingL', 'i-i-s-o-h-c-building', {
    networkArea: Projection.belongsTo('i-i-s-o-h-c-network-area', 'Название района', {
      areaName: Projection.attr('Название района', { index: 0 })
    }, { index: -1, hidden: true }),
    address: Projection.attr('Адрес', { index: 1 }),
    resultSquare: Projection.attr('Общая площадь ОТП', { index: 2 }),
    resultSquare_notStored: Projection.attr('общая площадь не хранимая', { index: 3 })
  });
};
