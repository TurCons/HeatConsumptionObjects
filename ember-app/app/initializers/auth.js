import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import Ember from 'ember';

export function initialize() {
  AuthenticatedRouteMixin.reopen({
    offlineGlobals: Ember.inject.service('offline-globals'),
    sessionAuthenticated: function() {
      this._super.apply(this, arguments);
    },

    sessionInvalidated() {
      this.transitionTo('login');
    }
  });
}

export default {
  name: 'auth',
  initialize
};
