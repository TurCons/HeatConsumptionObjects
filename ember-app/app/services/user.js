import Ember from 'ember';
import UserService from 'ember-flexberry-data/services/user';

export default UserService.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),

  getCurrentUser() {
    var store = this.get('store');
    var userId = this.get('session.data.authenticated.agentKey');
    //var userName = this.get('session.data.authenticated.userName');

    return store.query('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', { id: userId }).then(function (records) {
      let result = records.get('firstObject');
      if (!Ember.isNone(result)) {
        return result;
      }
      return null;
    }).catch(function (e) {
      console.error(e);
    });
  },

  getCurrentUserName() {
    return this.get('session.data.authenticated.userName');
  }
}); 