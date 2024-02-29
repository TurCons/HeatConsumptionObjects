import { Model as HeatConsumptionObjectMixin, defineNamespace, defineProjections } from
  '../mixins/regenerated/models/i-i-s-o-h-c-heat-consumption-object';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, HeatConsumptionObjectMixin, {

});

defineNamespace(Model);
defineProjections(Model);
export default Model;
