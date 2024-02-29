import Ember from 'ember';

export function initialize() {
  Ember.Route.reopen({
    /**
      Флаг: показывает должна ли форма помещаться внутрь разметки "мастеровой страницы" application или нет.
      Нужен т.к. у логин-формы полностью своя разметка не использующая разметку "мастеровой".

      @property hasMasterPage
      @type Boolean
      @default true
    */
    hasMasterPage: true,

    /**
      Устанавливает контроллер для текущего роута.
      [Больше информации](http://emberjs.com/api/classes/Ember.Route.html#method_setupController).

      @method setupController
      @param {Ember.Controller} controller Контроллер формы соответствующей роуту.
      @param {Object} model Модель соответствующая роуту.
      @param {Object} transition Объект transition.
    */
    setupController() {
      this._super(...arguments);

      // Берем флаги 'hasMasterPage' и 'contentOnly' из текущего роута и проставляем соответствующему свойству в контроллере 'application'.
      let applicationController = this.controllerFor('application');
      applicationController.set('hasMasterPage', !!this.get('hasMasterPage'));
    }
  });
}

export default {
  name: 'master-page',
  initialize
};
