import { Serializer as NetworkSectionSerializer } from
  '../mixins/regenerated/serializers/i-i-s-o-h-c-network-section';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(NetworkSectionSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
