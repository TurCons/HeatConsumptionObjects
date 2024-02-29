import BaseSubjectModel from 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field';
import { Projection } from 'ember-flexberry-data';

let Model = BaseSubjectModel.extend({
  
});

Model.defineProjection('AuditFieldSearch', 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field', {
  field: Projection.attr('Поле'),
  oldValue: Projection.attr('Старое значение'),
  newValue: Projection.attr('Новое значение'),
  mainChange: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field', '', {
  }, { hidden: true }),
  auditEntity: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity', '', {
  }, { hidden: true }),
});

export default Model;