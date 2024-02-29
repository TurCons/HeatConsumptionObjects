import { Model as ExtendedAuditEntityMixin, defineNamespace, defineProjections } from
  '../mixins/regenerated/models/i-i-s-o-h-c-extended-audit-entity';
// import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
import  BaseSubjectModel  from
'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity';

let Model = BaseSubjectModel.extend(Offline.ModelMixin, ExtendedAuditEntityMixin, {

});

defineNamespace(Model);
defineProjections(Model);
export default Model;
