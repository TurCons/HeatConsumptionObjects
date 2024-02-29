import Ember from 'ember';
import EditFormRoute from 'ember-flexberry/routes/edit-form';
import LockServicesMixineRoute from 'ember-flexberry/mixins/lock-route';

export default EditFormRoute.extend(LockServicesMixineRoute, {
  /**
   * Пользователь заблокировавший объект.
   */
  blockedByUser: undefined,

  /**
    This function will be called to solve open form read only or transition to parent route.
    You can override function for custom behavior.
    @method openReadOnly
    @param {String} lockUserName
    @return {Promise}
    @for EditFormRoute
  */

  openReadOnly(lockUserName) {
    this.set('blockedByUser', lockUserName);
    return this._super(...arguments);
  },

  /**
    Load limit accessible values for lookup.
    @method setupController
  */
  setupController(controller) {
    this._super(...arguments);

    var blockedByUser = this.get('blockedByUser');

    controller.set('blockedByUser', blockedByUser);
    Ember.tryInvoke(controller, 'afterSetup');
  },

  resetController() {
    this._super(...arguments);

    this.set('blockedByUser', undefined);
  }
});