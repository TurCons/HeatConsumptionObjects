import { Serializer as HeatConsumptionObjectSerializer } from
  '../mixins/regenerated/serializers/i-i-s-o-h-c-heat-consumption-object';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(HeatConsumptionObjectSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
