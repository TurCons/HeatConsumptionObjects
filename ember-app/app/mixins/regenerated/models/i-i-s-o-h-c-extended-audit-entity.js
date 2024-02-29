import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';


export let Model = Ember.Mixin.create({
  changedFields: DS.attr('string'),
  customField: DS.attr('string'),
  objectCaption: DS.attr('string'),
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
  modelClass.defineProjection('ExtendedAuditEntityL', 'i-i-s-o-h-c-extended-audit-entity', {
    changedFields: Projection.attr('Изменения полей', { index: 0 }),
    customField: Projection.attr('Дополнительное поле', { index: 1 }),
    objectCaption: Projection.attr('Подпись объекта', { index: 2 }), 

    objectPrimaryKey: Projection.attr('Идентификатор'),
    objectType: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type', '', {
      name: Projection.attr('Тип объекта'),
    }, { hidden: true }),
    operationTime: Projection.attr('Время операции'),
    operationType: Projection.attr('Тип операции'),
    executionResult: Projection.attr('Результат'),
    user: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Инициатор', {
      name: Projection.attr('Инициатор'),
    }, { hidden: true }),
    source: Projection.attr('Источник'),
    serializedField: Projection.attr('Изменения полей'),

  });
};
