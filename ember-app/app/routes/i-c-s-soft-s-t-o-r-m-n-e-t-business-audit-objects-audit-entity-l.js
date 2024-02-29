import Ember from 'ember';
import ListFormRoute from './list-form';
import { Query } from 'ember-flexberry-data';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ListFormFilterRoute from '../mixins/list-form-filter-route';

export default ListFormRoute.extend(AuthenticatedRouteMixin, ListFormFilterRoute, {
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'AuditEntityL'
  */
  //  modelProjection: 'ExtendedAuditEntityL',
    modelProjection: 'AuditEntityLExtended',
  /**
    Name of model to be used as list's records types.

    @property modelName
    @type String
    @default 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity'
  */
 //  'audit-extended',
  //  modelName: 'i-i-s-o-h-c-extended-audit-entity',
  modelName: 'audit-extended',
  /**
    Defined user settings developer.
    For default userSetting use empty name ('').
    Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.

    ```javascript
    {
      <componentName>: {
        <settingName>: {
          colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
          sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
          colsWidths: [ <colName>:<colWidth>, ... ],
        },
        ...
      },
      ...
    }
    ```

    @property developerUserSettings
    @type Object
    @default {}
  */
  developerUserSettings: { ICSSoftSTORMNETBusinessAuditObjectsAuditEntityL: {
    "DEFAULT": {
      "columnWidths": [{ "propName": "OlvRowMenu", "fixed": true }, { "propName": "OlvRowToolbar", "fixed": true }]
    }} },

  queryParams: {
    filterByObjectId: {
      refreshModel: true
    },
    filterByObjectType: {
      refreshModel: true
    }
  },

  /**
    It overrides base method and forms the limit predicate for loaded data.
    If there is displayed even number or records per page, records where 'address' attribute contains letter 'S' are filtered.
    If there is displayed odd number or records per page, records where 'address' attribute contains letter 'п' are filtered.

    @public
    @method objectListViewLimitPredicate
    @param {Object} options Method options.
    @param {String} [options.modelName] Type of records to load.
    @param {String} [options.projectionName] Projection name to load data by.
    @param {String} [options.params] Current route query parameters.
    @return {BasePredicate} The predicate to limit loaded data.
   */
  objectListViewLimitPredicate: function(options) {
    let methodOptions = Ember.merge({
      modelName: undefined,
      projectionName: undefined,
      params: undefined
    }, options);

    if (methodOptions.modelName === this.get('modelName') &&
        methodOptions.projectionName === this.get('modelProjection')) {

      let objectTypeName = options.params.filterByObjectType;
      if (objectTypeName) {
        let limitFunction = new Query.SimplePredicate('objectType.Name', Query.FilterOperator.Eq, objectTypeName);
        return limitFunction;
      }

      let objectPrimaryKey = options.params.filterByObjectId;

      if (objectPrimaryKey) {
        let limitFunction = new Query.SimplePredicate('objectPrimaryKey', Query.FilterOperator.Eq, '{' + objectPrimaryKey + '}');

        return limitFunction;
      }
    }

    return undefined;
  }
});
