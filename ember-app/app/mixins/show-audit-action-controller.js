import Ember from 'ember';
import RoutingManager from '../mixins/routing-manager';

export default Ember.Mixin.create(RoutingManager, {
  objectCaption: undefined,

  actions: {
    showAudit() {
      let objectPrimaryKey = this.get('model.id'),
          //currentRoute = this.get('applicationController').get('currentRouteName'),
          currentQueryParamsNames = this.get('queryParams'),
          currentQueryParams = '',
          objectCaption = this.get('objectCaption'),
          self = this;
      currentQueryParamsNames.forEach(function(element) {
        let value = self.get(element);
        currentQueryParams += '"' + element + '"' + ':' + '"' + (value ? value.toString() : '') + '",';
      }, this);

      if (currentQueryParams.length > 0) {
        currentQueryParams = '{' + currentQueryParams.substr(0, currentQueryParams.length - 1) + '}';
        currentQueryParams = JSON.parse(currentQueryParams);
      } else {
        currentQueryParams = {};
      }

      this.goToNewTab('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l', { filterByObjectId: objectPrimaryKey, objectCaption : objectCaption } );
    }
  }
});