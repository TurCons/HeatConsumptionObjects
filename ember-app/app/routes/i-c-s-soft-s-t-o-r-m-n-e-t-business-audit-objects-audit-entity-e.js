import Ember from 'ember';
import EditFormRoute from './edit-form';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default EditFormRoute.extend(AuthenticatedRouteMixin, {
  modelProjection: 'AuditEntityE',
  modelName: 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity',
  templateName: 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e',
  renderTemplate: function(controller) {
    this._super(...arguments);
    let runningOnDevice = this.get('runningOnDevice');
    if (runningOnDevice) {
      this.render('audit-entity-tab-header', {
        outlet: 'main-tab',
        controller: controller
      }); 
    }
  },
  
  actions : {
    didTransition() {
      Ember.run.scheduleOnce('afterRender', this, function () {
        let divsForTitle = Ember.$('.oveflow-text');
        divsForTitle = divsForTitle.toArray();
        divsForTitle.forEach((element) => {
          let title = element.textContent;
          if ((Ember.$(element).attr('title') === undefined || Ember.$(element).attr('title').length === 0) && title.length > 0) {
            Ember.$(element).attr('title', title);
          }
        });
      });
    }
  }

});
