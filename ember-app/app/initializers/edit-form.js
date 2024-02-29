import EditFormController from 'ember-flexberry/controllers/edit-form';
import EditFormRoute from 'ember-flexberry/routes/edit-form';
import FormFieldsPropertiesMixin from '../mixins/form-fields-properties';
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
export function initialize() {
  EditFormController.reopen({
    didSave: false,

    actions: {
      save() {
        this.set('didSave', true);
        this._super(...arguments);
      }
    }
  });

  EditFormRoute.reopen(FormFieldsPropertiesMixin, AuthenticatedRouteMixin, {
    actions: {
      didTransition() {
        this._super(...arguments);
        Ember.run.schedule('afterRender', this, function() {

          // Фиксирование тулбара.
          let editPanelField = Ember.$('.flexberry-edit-panel').parent();
          let flexberryForm = Ember.$('.flexberry-vertical-form');
          let formCaption = Ember.$('h3:not(.padding-for-modal)').first();
          let fCInfoHeader = Ember.$('.fc-header').first();
          let prevElement = editPanelField.prev();
          let buttonsRight =  Ember.$(window).width() - flexberryForm.position().left - flexberryForm.width();

          prevElement.css({ position:'fixed', 'z-index': 4, 'padding-top': '14px' });
          formCaption.css({ 'margin-top': '-14px', 'padding': '14px 0', 'width': flexberryForm.width()});
          let formCaptionHeight = formCaption.outerHeight();
          formCaption.next().css({ 'padding-top': formCaptionHeight });

          editPanelField.css({'right': buttonsRight });
          editPanelField.addClass('edit-form-fixed-header');
          formCaption.addClass('edit-form-fixed-header');

          //стили для шапки ИГ на форме обращения
          fCInfoHeader.css({ 'margin-top': '-14px', 'padding': '14px 0', 'width': flexberryForm.width() });
          fCInfoHeader.next().css({ 'padding-top': '180px' });
          fCInfoHeader.addClass('edit-form-fixed-header');


          // Добавление всплывающей подсказки к заголовкам полей и кнопкам.
          this.setTitles(Ember.$('.flexberry-content'));
        });
      },
    }
  });
}

export default {
  name: 'edit-form',
  initialize
};
