import Ember from 'ember';
import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';

export default OAuth2Bearer.extend({
  authorize: function authorize(data, block) {
    var accessToken = data['token'];
    if (Ember.isEmpty(accessToken)) {
      accessToken = data['access_token'];
    }

    if (!Ember.isEmpty(accessToken)) {
      block('Authorization', 'Bearer ' + accessToken);
    }
  }
});
