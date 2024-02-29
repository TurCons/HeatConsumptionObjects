import { Model as ConsumerMixin, defineNamespace, defineProjections } from
  '../mixins/regenerated/models/i-i-s-o-h-c-consumer';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ConsumerMixin, {

});

defineNamespace(Model);
defineProjections(Model);
export default Model;
