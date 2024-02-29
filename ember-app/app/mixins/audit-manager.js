import Ember from 'ember';
import config from '../config/environment';

export default Ember.Mixin.create({

  writeOperationAudit(actionName, sessionInfo) {
    let url = config.APP.backendUrl;
    let sI = Ember.isNone(sessionInfo) ? this.get('session.data.authenticated') : sessionInfo;
    var token = sI.token || sI.access_token;

    return Ember.$.post({
      url: url + '/api/audit/WriteCustomAudit/' + actionName, 
      headers: { 'Authorization': 'Bearer ' + token }
    });
  },

  actions: {
    writeOperationAuditAction(actionName, sessionInfo) {
      return this.writeOperationAudit(actionName, sessionInfo);
    }
  }
});