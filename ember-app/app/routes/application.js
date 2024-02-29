import Ember from 'ember';
import ModalApplicationRouteMixin from 'ember-flexberry/mixins/modal-application-route';
import AuthApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ModalApplicationRouteMixin, AuthApplicationRouteMixin, {

  session: Ember.inject.service('session'),  

  actions: {
    invalidateSession: function() {
      let appController = this.get('controller'),
          self = this;
      if (!Ember.isNone(appController)) {
        self.get('session').invalidate();
        
      //  this.transitionTo('login');
      }
    }
  }

});