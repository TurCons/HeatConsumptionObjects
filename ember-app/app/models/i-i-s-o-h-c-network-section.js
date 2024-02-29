import Ember from 'ember';
import { Model as NetworkSectionMixin, defineNamespace, defineProjections } from
  '../mixins/regenerated/models/i-i-s-o-h-c-network-section';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, NetworkSectionMixin, {

  _sectionNumberChanged: Ember.on('init', Ember.observer('sectionNumber', 
    'sectionType', 
    'heatConsumptionObject.objectName', 
    'heatConsumptionObject.building' , function() {
        Ember.run.once(this, '_descr_stringCompute');
  })),
  _descr_stringCompute: function() {
        
        let result = this.get('heatConsumptionObject.objectName') +  ' адрес здания: ' + 
        this.get('heatConsumptionObject.building.address') + 
        ' № участка: ' + this.get('sectionNumber') + ' тип участка: ' + 
        this.get('sectionType') ;
    
        return  this.set('descr_string', result);
      },

      getValidations: function () {
        let parentValidations = this._super();
        let thisValidations = {
          sectionNumber: { presence: {message:'Укажите номер участка'}},
          sectionType: { presence: {message:'Укажите тип участка'}},
          yearOfInstallation: { presence: {message:'Укажите год установки'}}
        };

        return Ember.$.extend(true, {}, parentValidations, thisValidations);
      },
});

defineNamespace(Model);
defineProjections(Model);
export default Model;
