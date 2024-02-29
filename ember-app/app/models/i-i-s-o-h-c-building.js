import { Model as BuildingMixin, defineNamespace, defineProjections } from
  '../mixins/regenerated/models/i-i-s-o-h-c-building';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, BuildingMixin, {

});

defineNamespace(Model);
defineProjections(Model);
export default Model;
