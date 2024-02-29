import ListFormController from 'ember-flexberry/controllers/list-form';
import Ember from 'ember';
import CommonController from '../mixins/common-controller';
import config from '../config/environment';
import ListFormFilterController from '../mixins/list-form-filter-controller';

export default ListFormController.extend(CommonController, ListFormFilterController, {
  objectlistviewEventsService: Ember.inject.service('objectlistview-events'),

  /**
   * AppController для вызова общих методов (например, вызова alert).
  */
  applicationController: Ember.inject.controller('application'),

  hasReloadCurrentDictionary: false,

  backArrow: true,

  queryParams: ['limitfunction'],

  /**
  * Набор операций для переопределения на контроллерах.
  */
  listFormOperations: {
    close: false,
    configureColumns: true,
    exportExcel: true,
    create: true,
    delete: true,
    filter: true,
    refresh: true,
    settings: undefined
  },

  /**
  * Набор операций для вычисления с учетом переопределяемых на контроллерах и подсистемы полномочий.
  * Если не ввести отдельное свойство для вычислений, то при установке операций listFormOperations в false они всегда будут false.
  */
  listFormOperationsComputed : {
    close: false,
    configureColumns: true,
    exportExcel: true,
    create: false,
    delete: false,
    filter: true,
    refresh: true,
    settings: false
  },

  /**
  * Инициализация списка.
  */
  init: function() {

  },

  /**
   * Имя модели, отображаемой в списке.
   */
  recordsModelName: Ember.computed('model.type.modelName', 'model.constructor.modelName', function() {
    let modelName = this.get('model.type.modelName');
    return Ember.isBlank(modelName) ? this.get('model.constructor.modelName') : modelName;
  }),

  objectlistviewComponentName: 'objectlistviewComponentName',

  checkReloadCurrentDictionary(modelName) {
    let models = this.get('loadingObjects');
    let result = !Ember.isBlank(modelName) && models.some(function(item) {
      return item.modelName === modelName && !item.onlyFirstLoad;
    });

    this.set('hasReloadCurrentDictionary', result);
    return result;
  },

  /**
  * Вызывается из setupController в list-form роуте. Отвечает за видимость кнопок в зависимости от настроек форм и полномочий.
  */
  changeToolbarWithPermitions(modelN, insertAbility, deleteAbility) {
    let modelName = Ember.isBlank(modelN) ? this.get('recordsModelName') : modelN;
    if (!Ember.isBlank(modelName)) {
      let self = this;
      self.set('listFormOperationsComputed.close', self.get('listFormOperations.close'));
      self.set('listFormOperationsComputed.configureColumns', self.get('listFormOperations.configureColumns'));
      self.set('listFormOperationsComputed.exportExcel', self.get('listFormOperations.exportExcel') && !config.APP.runningOnDevice);
      self.set('listFormOperationsComputed.filter', self.get('listFormOperations.filter'));
      self.set('listFormOperationsComputed.refresh', self.get('listFormOperations.refresh'));
      if (self.get('listFormOperations.settings') === undefined) {
        let reloadDict = self.checkReloadCurrentDictionary(modelName),
            btns = self.get('customSettingsButtons');
        self.set('listFormOperationsComputed.settings', reloadDict || self.get('hasOpenListObjByQRCode') || (!Ember.isNone(btns) && btns.length > 0));
      } else {
        self.set('listFormOperationsComputed.settings', self.get('listFormOperations.settings'));
      }

      let completeInsertAbility = self.get('listFormOperations.create') && insertAbility,
          completeDeleteAbility = self.get('listFormOperations.delete') && deleteAbility,
          offlineModels = self.get('store.offlineModels');
      if (!Ember.isNone(offlineModels) && offlineModels[modelName] === true) {
        completeInsertAbility = false;
        completeDeleteAbility = false;
      }

      self.set('listFormOperationsComputed.create', completeInsertAbility);
      self.set('listFormOperationsComputed.delete', completeDeleteAbility);
    }
  },

  filterButtonClick: function() {
    this.get('applicationController').showMDAlert('Фильтрация для списка "' + this.get('title') + '" еще не реализована.');
  },

  _transitionToEditFormRoute(modelName, id) {
    let editFormRoute = this.get('editFormRoute');
    if (Ember.isBlank(id)) {
      var transNew = Ember.isBlank(editFormRoute) ? Ember.getOwner(this).lookup('router:main').hasRoute(modelName + '.new') ? this.transitionToRoute(modelName + '.new') : this.transitionToRoute(modelName + '-e' + '.new') : this.transitionToRoute(editFormRoute + '.new');
      this._resetTransitionQueryParams(transNew);
    } else {
      var trans = Ember.isBlank(editFormRoute) ? Ember.getOwner(this).lookup('router:main').hasRoute(modelName) ? this.transitionToRoute(modelName) : this.transitionToRoute(modelName + '-e') : this.transitionToRoute(editFormRoute, id);
      this._resetTransitionQueryParams(trans);
    }
  },

  actions: {
    showConfirmation() {
      if (!this.get('history').tryTransitionToPrevious(this)) {
        this.transitionToRoute('/');
      }
    },
    /**
    * Экшен для открытия формы создания объекта.
    */
    addNewRecordInOLV: function addNewRecordInOLV() {
      if (this) {
        let modelType = this.get('model.type'),
            modelName = Ember.isNone(modelType) ? this.get('modelName') : modelType.modelName;
        this._transitionToEditFormRoute(modelName);
      }
    },

    /**
     * Обработчик кнопки добавления записи в тулбаре.
     */
    toolbarCreateButtonClick: function () {
      if (this) {
        let modelType = this.get('model.type'),
            modelName = Ember.isNone(modelType) ? this.get('modelName') : modelType.modelName;
        this._transitionToEditFormRoute(modelName);
      }
    },

    configureObjectlistviewRow: function(rowConfig, record) {
      let actualityStatus = record.get('actuality');
      if (actualityStatus !== undefined && !actualityStatus) {
        Ember.set(rowConfig, 'customClass', 'grey ');
      }

      rowConfig.canBeDeleted = this.get('listFormOperationsComputed.delete');
    },

    clickByRow: function(record) {
      let modelName = this.get('modelName'),
          id = record.data.get('id');

      if (modelName === undefined) {
        modelName = this.get('model.query.modelName');
      }

      this._transitionToEditFormRoute(modelName, id);
    },

    /**
     * Обработчик кнопки обновления списка в тулбаре.
     */
    toolbarRefreshButtonClick: function () {
      // Вызов action'а обновления из ember-flexberry/mixins/flexberry-objectlistview-route.
      var self = this;

      setTimeout(function() {
        self.send('refreshList');
      }, 300);
    },

    /**
     * Обработчик кнопки удаления в тулбаре.
     */
    toolbarDeleteButtonClick: function() {
      this.get('objectlistviewEventsService').deleteRowsTrigger(this.get('objectlistviewComponentName'), true);
    },

    /**
     * Обработчик кнопки настройки столбцов в тулбаре.
     */
    toolbarConfigureColumnsButtonClick: function () {
      // Вызов action'а настройки столбцов из ember-flexberry/mixins/olv-toolbar-mixin.
        //this.send('showConfigDialog');

      var self = this,
          columnConfigSidebar = Ember.$('.mmc-sidebar-dialog > .colconfig-dialog-sidebar').closest('.mmc-sidebar-dialog');
      if (columnConfigSidebar.length > 0) {
        columnConfigSidebar.sidebar('toggle');
      } else {
        self.send('showConfigDialog', self.get('objectlistviewComponentName'));
      }

      //setTimeout(function() {
      //  self.send('showConfigDialog', self.get('objectlistviewComponentName'));
      //}, 300);
    },

    /**
     * Обработчик кнопки настройки столбцов в тулбаре.
     */
    toolbarMenuItemClickClick: function () {
      // Вызов action'а настройки столбцов из ember-flexberry/mixins/olv-toolbar-mixin.
      //this.send('showConfigDialog');
      var self = this;

      setTimeout(function() {
        self.send('onMenuItemClick', self.get('objectlistviewComponentName'));
      }, 300);
    },

    /**
     * Обработчик кнопки фильтрации в тулбаре.
     */
    toolbarFilterButtonClick: function () {
      var self = this;

      setTimeout(function() {
        self.filterButtonClick();
      }, 300);
    }
  }
});
