import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';
import EmberFlexberrySecurityTranslations from 'ember-flexberry-security/locales/ru/translations';

import EmberFlexberryGisTranslations from 'ember-flexberry-gis/locales/ru/translations';


import IISOHCBuildingLForm from './forms/i-i-s-o-h-c-building-l';
import IISOHCConsumerLForm from './forms/i-i-s-o-h-c-consumer-l';
import IISOHCHeatConsumptionObjectLForm from './forms/i-i-s-o-h-c-heat-consumption-object-l';
import IISOHCNetworkAreaLForm from './forms/i-i-s-o-h-c-network-area-l';
import IISOHCBuildingEForm from './forms/i-i-s-o-h-c-building-e';
import IISOHCConsumerEForm from './forms/i-i-s-o-h-c-consumer-e';
import IISOHCHeatConsumptionObjectEForm from './forms/i-i-s-o-h-c-heat-consumption-object-e';
import IISOHCNetworkAreaEForm from './forms/i-i-s-o-h-c-network-area-e';
import IISOHCBuildingModel from './models/i-i-s-o-h-c-building';
import IISOHCConsumerModel from './models/i-i-s-o-h-c-consumer';
import IISOHCHeatConsumptionObjectModel from './models/i-i-s-o-h-c-heat-consumption-object';
import IISOHCNetworkAreaModel from './models/i-i-s-o-h-c-network-area';
import IISOHCNetworkSectionModel from './models/i-i-s-o-h-c-network-section';

import MapForm from './forms/map';
import MapsForm from './forms/maps';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations, EmberFlexberryGisTranslations);
Ember.$.extend(true, translations, EmberFlexberrySecurityTranslations);

Ember.$.extend(true, translations, {
  models: {
    'i-i-s-o-h-c-building': IISOHCBuildingModel,
    'i-i-s-o-h-c-consumer': IISOHCConsumerModel,
    'i-i-s-o-h-c-heat-consumption-object': IISOHCHeatConsumptionObjectModel,
    'i-i-s-o-h-c-network-area': IISOHCNetworkAreaModel,
    'i-i-s-o-h-c-network-section': IISOHCNetworkSectionModel,
  },

  'application-name': 'Объекты теплопотребления',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Объекты теплопотребления',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Объекты теплопотребления',
          title: 'Объекты теплопотребления'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'районы-и-здания': {
          caption: 'районы и здания',
          title: 'районы и здания',
          'i-i-s-o-h-c-network-area-l': {
            caption: 'Районы',
            title: ''
          },
          'i-i-s-o-h-c-building-l': {
            caption: 'Здания',
            title: ''
          }
        },
        'о-т-п-и-клиенты': {
          caption: 'ОТП и клиенты',
          title: 'ОТП и клиенты',
          'i-i-s-o-h-c-heat-consumption-object-l': {
            caption: 'Объекты теплопотребления',
            title: ''
          },
          'i-i-s-o-h-c-consumer-l': {
            caption: 'Потребители',
            title: ''
          }
        },
		
		'maps': {
          caption: 'Карты',
          title: '',
        }
		
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-o-h-c-building-l': IISOHCBuildingLForm,
    'i-i-s-o-h-c-consumer-l': IISOHCConsumerLForm,
    'i-i-s-o-h-c-heat-consumption-object-l': IISOHCHeatConsumptionObjectLForm,
    'i-i-s-o-h-c-network-area-l': IISOHCNetworkAreaLForm,
    'i-i-s-o-h-c-building-e': IISOHCBuildingEForm,
    'i-i-s-o-h-c-consumer-e': IISOHCConsumerEForm,
    'i-i-s-o-h-c-heat-consumption-object-e': IISOHCHeatConsumptionObjectEForm,
    'i-i-s-o-h-c-network-area-e': IISOHCNetworkAreaEForm,
	'map': MapForm,
    'maps': MapsForm,
  },

});

export default translations;
