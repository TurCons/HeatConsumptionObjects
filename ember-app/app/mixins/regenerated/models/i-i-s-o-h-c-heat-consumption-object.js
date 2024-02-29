import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  objectName: DS.attr('string'),
  registrationDate: DS.attr('date'),
  objectSquare: DS.attr('number'),
  qRCode: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  building: DS.belongsTo('i-i-s-o-h-c-building', { inverse: null, async: false }),
  consumer: DS.belongsTo('i-i-s-o-h-c-consumer', { inverse: null, async: false }),
  networkSection: DS.hasMany('i-i-s-o-h-c-network-section', { inverse: 'heatConsumptionObject', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      building: { presence: true },
      consumer: { presence: true }
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
  modelClass.defineProjection('AuditView', 'i-i-s-o-h-c-heat-consumption-object', {
    objectName: Projection.attr('Object name', { index: 0 }),
    registrationDate: Projection.attr('Registration date', { index: 1 }),
    objectSquare: Projection.attr('Object square', { index: 2 }),
    qRCode: Projection.attr('Q r code', { index: 3 }),
    building: Projection.belongsTo('i-i-s-o-h-c-building', 'Building', {
      address: Projection.attr('Address', { index: 5 })
    }, { index: 4 }),
    consumer: Projection.belongsTo('i-i-s-o-h-c-consumer', 'Consumer', {
      personalAccount: Projection.attr('Personal account', { index: 7 })
    }, { index: 6 }),
    createTime: Projection.attr('', { index: 8 }),
    creator: Projection.attr('', { index: 9 }),
    editTime: Projection.attr('', { index: 10 }),
    editor: Projection.attr('', { index: 11 }),
    networkSection: Projection.hasMany('i-i-s-o-h-c-network-section', 'Network section', {
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
    })
  });
  modelClass.defineProjection('HeatConsumptionObjectE', 'i-i-s-o-h-c-heat-consumption-object', {
    objectName: Projection.attr('Наименование объекта', { index: 0 }),
    registrationDate: Projection.attr('Дата регистрации', { index: 1 }),
    objectSquare: Projection.attr('Площадь объекта', { index: 2 }),
    qRCode: Projection.attr('QR код', { index: 3 }),
    building: Projection.belongsTo('i-i-s-o-h-c-building', 'Здание', {
      address: Projection.attr('Адрес здания', { index: 5 })
    }, { index: 4 }),
    consumer: Projection.belongsTo('i-i-s-o-h-c-consumer', 'Потребитель', {
      personalAccount: Projection.attr('Лицевой счет потребителя', { index: 7 })
    }, { index: 6 }),
    networkSection: Projection.hasMany('i-i-s-o-h-c-network-section', 'Network section', {
      sectionNumber: Projection.attr('Номер участка', { index: 0 }),
      sectionType: Projection.attr('Тип участка', { index: 1 }),
      insulationType: Projection.attr('Тип изоляции', { index: 2 }),
      yearOfInstallation: Projection.attr('Год прокладки', { index: 3 }),
      installationType: Projection.attr('Тип прокладки', { index: 4 }),
      descr_string: Projection.attr('Строка описания', { index: 5 }),
      heatConsumptionObject: Projection.belongsTo('i-i-s-o-h-c-heat-consumption-object', '', {

      }, { index: 6, hidden: true })
    })
  });
  modelClass.defineProjection('HeatConsumptionObjectL', 'i-i-s-o-h-c-heat-consumption-object', {
    objectName: Projection.attr('Наименование ОТП', { index: 0 }),
    registrationDate: Projection.attr('Дата регистрации', { index: 1 }),
    objectSquare: Projection.attr('Площадь объекта', { index: 2 }),
    qRCode: Projection.attr('QR код', { index: 3 }),
    building: Projection.belongsTo('i-i-s-o-h-c-building', 'Адрес здания', {
      address: Projection.attr('Адрес здания', { index: 4 })
    }, { index: -1, hidden: true }),
    consumer: Projection.belongsTo('i-i-s-o-h-c-consumer', 'Лицевой счет потребителя', {
      personalAccount: Projection.attr('Лицевой счет потребителя', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
