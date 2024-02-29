import Ember from 'ember';
import config from '../config/environment';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';


const AUTHENTICATOR = config['ember-simple-auth'].authenticator; 

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: Ember.inject.service('session'),
  store: Ember.inject.service(),

  rememberMe: false,
  onlineModeOn: false,
  backendUrl: config.APP.backendUrls.root,
  hasMasterPage: false,

/*
  init() {
    this._super(...arguments);
  },

  willDestroyElement() {
    this._super(...arguments);
  },
*/
   actions: {
     onLogin(username, password, store) {
         console.log(username + ' ' + password + ' ' + AUTHENTICATOR);
       let attrs = { username, password };
       
  //     let store = component.get('targetObject.store');
       let user = this.store.createRecord('user', attrs);
      // user.save();
       let session = this.get('session');
       return session.authenticate(config['ember-simple-auth'].authenticator, username, password, store).then(function() {
        var sessionInfo = session.get('data.authenticated');
      }, function() {
        alert('ошибка при авторизации');
      });
    }
  }
});

