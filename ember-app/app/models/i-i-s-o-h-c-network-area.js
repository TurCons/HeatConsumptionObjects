import { Model as NetworkAreaMixin, defineNamespace, defineProjections } from
  '../mixins/regenerated/models/i-i-s-o-h-c-network-area';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, NetworkAreaMixin, {

});

defineNamespace(Model);
defineProjections(Model);
export default Model;
