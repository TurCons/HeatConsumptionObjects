import Ember from 'ember';
import ListFormController from './list-form-common';
import ListFormFilterController from '../mixins/list-form-filter-controller';
export default ListFormController.extend(ListFormFilterController, {
  title: 'Аудит',
  editFormRoute: 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e',

  /**
   * Меняем формат отображения поля operationTime
   * @method getCellComponent
   * @param {Object} attr
   * @param {String} bindingPath
   */
  getCellComponent(attr, bindingPath) {
    let cellComponent = this._super(...arguments);
    if(bindingPath==='operationTime'){
      cellComponent.componentName='object-list-view-cell';
      cellComponent.componentProperties = {
        dateFormat : 'DD.MM.YYYY HH:mm:ss'
      };
    }
    return cellComponent;
  },

  queryParams: ['limitfunction', 'filterByObjectId', 'filterByObjectType', 'previousRoute', 'previousRouteParams', 'objectCaption'],
  filterByObjectId: null,
  filterByObjectType: null,
  previousRoute: null,
  previousRouteParams: null,
  objectCaption: null,

  listFormOperations: Ember.computed('previousRoute', function () {
    return {
      close: false,
      configureColumns: true,
      exportExcel: true,
      create: false,
      delete: false,
      filter: true,
      refresh: true,
      settings: false
    };
  }),

  actions: {
    toolbarCloseButtonClick() {
      let previousRoute = this.get('previousRoute'),
          previousRouteParamsStr = this.get('previousRouteParams'),
          id = this.get('filterByObjectId'),
          previousRouteParams;
      
      if (previousRouteParamsStr) {
        try {
          previousRouteParams = JSON.parse(previousRouteParamsStr);
        } catch (e) {}
      }

      if (Ember.isNone(id)) {
        this.transitionToRoute(previousRoute, { queryParams : previousRouteParams });
      } else {
        this.transitionToRoute(previousRoute, id, { queryParams : previousRouteParams });
      }
    }
  }
});
