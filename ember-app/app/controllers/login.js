import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  authenticator: config['ember-simple-auth'].authenticator,
  loginInProcess: false,

  hasMasterPage: false,

  applicationController: Ember.inject.controller('application'),

  
});