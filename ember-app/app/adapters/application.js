import { Projection, Adapter } from 'ember-flexberry-data';
import config from '../config/environment';
import Ember from 'ember';
import AuthDataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default Adapter.Odata.extend(AuthDataAdapterMixin, Projection.AdapterMixin, {
  host: config.APP.backendUrls.api,
  authorizer: config['ember-simple-auth'].authorizer,
  authorizerOffline: config['ember-simple-auth'].authorizerOffline,
  timeout: config.APP.backendApiTimeout,
  session: Ember.inject.service(),

  handleResponse: function (status) {
    if (status === 401) {
      if (this.get('session.isAuthenticated')) {
        this.get('session').invalidate();
      }
      return true;
    } else {
        if (status === 500 && 
          !Ember.isNone(arguments[2].error.message) && 
          arguments[2].error.message.includes('User with login "" is not found in Flexberry Security. Check the IDataService instance, that is used for SecurityManager.') && 
          this.get('session.isAuthenticated')) 
        {
          setTimeout(()=>{
            this.get('session').invalidate();
          }, 500);
        }
        else {
          return this._super.apply(this, arguments);
        }
    }
  },
});