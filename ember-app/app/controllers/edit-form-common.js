import Ember from 'ember';
import EditFormController from 'ember-flexberry/controllers/edit-form';
import CommonController from '../mixins/common-controller';
import ShowAuditActionMixin from '../mixins/show-audit-action-controller';

export default EditFormController.reopen(CommonController, ShowAuditActionMixin, {
  /**
   * AppController для вызова общих методов (например, вызова alert).
   */
  applicationController: Ember.inject.controller('application'),

  session: Ember.inject.service('session'),

  backRoute: null,

  backId: null,

  parentRouteQueryParams: null,

  /**
   * Пользователь заблокировавший объект.
   */
  blockedByUser: undefined,

  afterSetup: function () {
    var blockedByUser = this.get('blockedByUser');
    var applicationController = this.get('applicationController');

    if (!Ember.isEmpty(blockedByUser)) {
      applicationController.initAndShowMDAlert('Объект заблокирован пользователем: "' + blockedByUser + '"');
    }
  }
});