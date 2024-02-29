import { Serializer as NetworkAreaSerializer } from
  '../mixins/regenerated/serializers/i-i-s-o-h-c-network-area';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(NetworkAreaSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
