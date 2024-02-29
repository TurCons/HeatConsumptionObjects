import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  areaName: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
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
  modelClass.defineProjection('AuditView', 'i-i-s-o-h-c-network-area', {
    areaName: Projection.attr('Area name', { index: 0 }),
    createTime: Projection.attr('', { index: 1 }),
    creator: Projection.attr('', { index: 2 }),
    editTime: Projection.attr('', { index: 3 }),
    editor: Projection.attr('', { index: 4 })
  });
  modelClass.defineProjection('NetworkAreaE', 'i-i-s-o-h-c-network-area', {
    areaName: Projection.attr('Наименование района', { index: 0 })
  });
  modelClass.defineProjection('NetworkAreaL', 'i-i-s-o-h-c-network-area', {
    areaName: Projection.attr('Наименование района', { index: 0 })
  });
};
