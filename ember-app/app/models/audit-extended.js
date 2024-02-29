import  BaseSubjectModel  from
'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity';
import { Projection } from 'ember-flexberry-data';

let Model = BaseSubjectModel.extend({
  
});

Model.defineProjection('AuditEntityLExtended', 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity', {
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

export default Model;