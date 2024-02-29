import Ember from 'ember';
// import config from '../config/environment';

export default Ember.Controller.extend({

    /**
   Флаг: показывает должна ли форма помещаться внутрь разметки "мастеровой страницы" application или нет.
   Нужен т.к. у логин-формы полностью своя разметка не использующая разметку "мастеровой".
   Инициализируется для каждой формы см. initializers/master-page.

   @property hasMasterPage
   @type Boolean
   @default true
  */
  hasMasterPage: true,

  session: Ember.inject.service('session'),

  token: Ember.computed('session.data.authenticated.token', 'session.data.authenticated.access_token', function () {
    return this.get('session.data.authenticated.token') || this.get('session.data.authenticated.access_token');
  }),
 
 
  sitemap: Ember.computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.районы-и-здания.caption'),
          title: i18n.t('forms.application.sitemap.районы-и-здания.title'),
          children: [{
            link: 'i-i-s-o-h-c-network-area-l',
            caption: i18n.t('forms.application.sitemap.районы-и-здания.i-i-s-o-h-c-network-area-l.caption'),
            title: i18n.t('forms.application.sitemap.районы-и-здания.i-i-s-o-h-c-network-area-l.title'),
            children: null
          }, {
            link: 'i-i-s-o-h-c-building-l',
            caption: i18n.t('forms.application.sitemap.районы-и-здания.i-i-s-o-h-c-building-l.caption'),
            title: i18n.t('forms.application.sitemap.районы-и-здания.i-i-s-o-h-c-building-l.title'),
            children: null
          }]
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.о-т-п-и-клиенты.caption'),
          title: i18n.t('forms.application.sitemap.о-т-п-и-клиенты.title'),
          children: [{
            link: 'i-i-s-o-h-c-heat-consumption-object-l',
            caption: i18n.t('forms.application.sitemap.о-т-п-и-клиенты.i-i-s-o-h-c-heat-consumption-object-l.caption'),
            title: i18n.t('forms.application.sitemap.о-т-п-и-клиенты.i-i-s-o-h-c-heat-consumption-object-l.title'),
            children: null
          }, {
            link: 'i-i-s-o-h-c-consumer-l',
            caption: i18n.t('forms.application.sitemap.о-т-п-и-клиенты.i-i-s-o-h-c-consumer-l.caption'),
            title: i18n.t('forms.application.sitemap.о-т-п-и-клиенты.i-i-s-o-h-c-consumer-l.title'),
            children: null
          }]
        }, {
          link: null,
          isMenu: true,
          caption: 'Администрирование',
          title: 'Администрирование',
          children: [{
            link: 'i-i-s-o-h-c-extended-audit-entity-l',
//            hasParams : true,
//            params : ['i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l', {isQueryParams: true, values: {
//              filterByObjectId : null,
//              objectCaption: '',
//            }}],
            caption: 'Аудит',
            title: 'Аудит',
            children: null
          }
          ]
        }, {
          link: null,
          isMenu: true,
          caption: 'ГИС',
          title: 'ГИС',
          children: [{
            link: 'maps',
            caption: 'Карта',
            title: 'Карта',
            children: null
          }
          ]
        }
      ]
    };
  }),

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: ['ru', 'en'],

  /**
    Handles changes in userSettingsService.isUserSettingsServiceEnabled.

    @method _userSettingsServiceChanged
    @private
  */
  _userSettingsServiceChanged: Ember.observer('userSettingsService.isUserSettingsServiceEnabled', function() {
    this.get('target.router').refresh();
  }),

    /**
      Initializes controller.
    */
   init() {
    this._super(...arguments);

    let i18n = this.get('i18n');
    if (Ember.isNone(i18n)) {
      return;
    }

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = Ember.A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.contains(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }

    Ember.run.schedule('afterRender', this, function () {

      window.addEventListener('keydown', function (event) {
        if (event.key === "Tab") {
          var $focused = document.activeElement;
          Ember.$($focused).find(".selected").click();
          Ember.$("a.result.active").click();
        }
      });
    });
  },

  getUrlParams(url) {

    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {

      // stuff after # is not part of query string, so get rid of it
      queryString = queryString.split('#')[0];

      // split our query string into its component parts
      var arr = queryString.split('&');

      for (var i = 0; i < arr.length; i++) {
        // separate the keys and the values
        var a = arr[i].split('=');

        // set parameter name and value (use 'true' if empty)
        var paramName = a[0];
        var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

        // (optional) keep case consistent
        paramName = paramName.toLowerCase();
        if (typeof paramValue === 'string') {
          paramValue = paramValue.toLowerCase();
        }

        // if the paramName ends with square brackets, e.g. colors[] or colors[2]
        if (paramName.match(/\[(\d+)?\]$/)) {

          // create key if it doesn't exist
          var key = paramName.replace(/\[(\d+)?\]/, '');
          if (!obj[key]) {
            obj[key] = [];
          }

          // if it's an indexed array e.g. colors[2]
          if (paramName.match(/\[\d+\]$/)) {
            // get the index value and add the entry at the appropriate position
            var index = /\[(\d+)\]/.exec(paramName)[1];
            obj[key][index] = paramValue;
          } else {
            // otherwise add the value to the end of the array
            obj[key].push(paramValue);
          }
        } else {
          // we're dealing with a string
          if (!obj[paramName]) {
            // if it doesn't exist, create property
            obj[paramName] = paramValue;
          } else if (obj[paramName] && typeof obj[paramName] === 'string'){
            // if property does exist and it's a string, convert it to an array
            obj[paramName] = [obj[paramName]];
            obj[paramName].push(paramValue);
          } else {
            // otherwise add the property
            obj[paramName].push(paramValue);
          }
        }
      }
    }

    return obj;
  },

  /**
    Service that triggers objectlistview events.

    @property objectlistviewEventsService
    @type Service
  */
  objectlistviewEventsService: Ember.inject.service('objectlistview-events'),

  /**
    Service for managing the state of the application.

    @property appState
    @type AppStateService
  */
  appState: Ember.inject.service(),

  actions: {
    /**
      Call `updateWidthTrigger` for `objectlistviewEventsService`.

      @method actions.updateWidth
    */
    updateWidth() {
      this.get('objectlistviewEventsService').updateWidthTrigger();
    },

    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      let sidebar = Ember.$('.ui.sidebar.main.menu');
      sidebar.sidebar('toggle');

      if (Ember.$('.inverted.vertical.main.menu').hasClass('visible')) {
        Ember.$('.sidebar.icon.text-menu-show').removeClass('hidden');
        Ember.$('.sidebar.icon.text-menu-hide').addClass('hidden');
        Ember.$('.bgw-opacity').addClass('hidden');
        Ember.$('.full.height').css({ transition: 'width 0.45s ease-in-out 0s', width: '100%' });
      } else {
        Ember.$('.sidebar.icon.text-menu-show').addClass('hidden');
        Ember.$('.sidebar.icon.text-menu-hide').removeClass('hidden');
        Ember.$('.bgw-opacity').removeClass('hidden');
        Ember.$('.full.height').css({ transition: 'width 0.3s ease-in-out 0s', width: 'calc(100% - ' + sidebar.width() + 'px)' });
      }
    },

    /**
      Toggles application sitemap's side bar in mobile view.

      @method actions.toggleSidebarMobile
    */
    toggleSidebarMobile() {
      Ember.$('.ui.sidebar.main.menu').sidebar('toggle');

      if (Ember.$('.inverted.vertical.main.menu').hasClass('visible')) {
        Ember.$('.sidebar.icon.text-menu-show').removeClass('hidden');
        Ember.$('.sidebar.icon.text-menu-hide').addClass('hidden');
        Ember.$('.bgw-opacity').addClass('hidden');
      } else {
        Ember.$('.sidebar.icon.text-menu-show').addClass('hidden');
        Ember.$('.sidebar.icon.text-menu-hide').removeClass('hidden');
        Ember.$('.bgw-opacity').removeClass('hidden');
      }
    }
  }
});
