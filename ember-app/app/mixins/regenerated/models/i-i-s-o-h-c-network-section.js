import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  sectionNumber: DS.attr('number'),
  sectionType: DS.attr('i-i-s-o-h-c-t-section-type'),
  insulationType: DS.attr('number'),
  yearOfInstallation: DS.attr('number'),
  installationType: DS.attr('i-i-s-o-h-c-t-installation-type'),
  /**
    Non-stored property.

    @property descr_string
  */
  descr_string: DS.attr('string'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'descr_stringCompute' method in model class (outside of this mixin) if you want to compute value of 'descr_string' property.

    @method _descr_stringCompute
    @private
    @example
      ```javascript
      _descr_stringChanged: Ember.on('init', Ember.observer('descr_string', function() {
        Ember.run.once(this, '_descr_stringCompute');
      }))
      ```
  */
  _descr_stringCompute: function() {
    let result = (this.descr_stringCompute && typeof this.descr_stringCompute === 'function') ? this.descr_stringCompute() : null;
    this.set('descr_string', result);
  },
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  heatConsumptionObject: DS.belongsTo('i-i-s-o-h-c-heat-consumption-object', { inverse: 'networkSection', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      heatConsumptionObject: { presence: true }
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
  modelClass.defineProjection('AuditView', 'i-i-s-o-h-c-network-section', {
    sectionNumber: Projection.attr('Section number', { index: 0 }),
    sectionType: Projection.attr('Section type', { index: 1 }),
    insulationType: Projection.attr('Insulation type', { index: 2 }),
    yearOfInstallation: Projection.attr('Year of installation', { index: 3 }),
    installationType: Projection.attr('Installation type', { index: 4 }),
    descr_string: Projection.attr('Descr_string', { index: 5 }),
    createTime: Projection.attr('', { index: 6 }),
    creator: Projection.attr('', { index: 7 }),
    editTime: Projection.attr('', { index: 8 }),
    editor: Projection.attr('', { index: 9 })
  });
  modelClass.defineProjection('NetworkSectionE', 'i-i-s-o-h-c-network-section', {
    sectionNumber: Projection.attr('Номер участка', { index: 0 }),
    sectionType: Projection.attr('Тип участка', { index: 1 }),
    insulationType: Projection.attr('Тип изоляции', { index: 2 }),
    yearOfInstallation: Projection.attr('Год прокладки', { index: 3 }),
    installationType: Projection.attr('Тип прокладки', { index: 4 }),
    descr_string: Projection.attr('Строка описания', { index: 5 }),
    heatConsumptionObject: Projection.belongsTo('i-i-s-o-h-c-heat-consumption-object', '', {

    }, { index: 6, hidden: true })
  });
};
