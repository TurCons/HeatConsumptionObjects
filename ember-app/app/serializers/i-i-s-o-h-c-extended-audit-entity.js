import { Serializer as ExtendedAuditEntitySerializer } from
  '../mixins/regenerated/serializers/i-i-s-o-h-c-extended-audit-entity';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ExtendedAuditEntitySerializer, {
  
  attrs: {
    user: { serialize: 'odata-id', deserialize: 'records' },
    objectType: { serialize: 'odata-id', deserialize: 'records' },
    auditFields: { serialize: false, deserialize: 'records' },
  },
  
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
