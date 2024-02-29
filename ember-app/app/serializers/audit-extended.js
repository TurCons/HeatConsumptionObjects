import { Serializer } from 'ember-flexberry-data';

export default Serializer.Odata.extend({
    attrs: {
        user: { serialize: 'odata-id', deserialize: 'records' },
        objectType: { serialize: 'odata-id', deserialize: 'records' },
        auditFields: { serialize: false, deserialize: 'records' },
      },
    
      /**
        Field name where object identifier is kept.
      */
      primaryKey: '__PrimaryKey',
    
});
