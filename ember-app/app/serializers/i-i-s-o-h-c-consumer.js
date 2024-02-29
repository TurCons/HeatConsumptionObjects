import { Serializer as ConsumerSerializer } from
  '../mixins/regenerated/serializers/i-i-s-o-h-c-consumer';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ConsumerSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
