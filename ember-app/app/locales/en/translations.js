import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';
import EmberFlexberrySecurityTranslations from 'ember-flexberry-security/locales/en/translations';

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

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);
Ember.$.extend(true, translations, EmberFlexberrySecurityTranslations);

Ember.$.extend(true, translations, {
  models: {
    'i-i-s-o-h-c-building': IISOHCBuildingModel,
    'i-i-s-o-h-c-consumer': IISOHCConsumerModel,
    'i-i-s-o-h-c-heat-consumption-object': IISOHCHeatConsumptionObjectModel,
    'i-i-s-o-h-c-network-area': IISOHCNetworkAreaModel,
    'i-i-s-o-h-c-network-section': IISOHCNetworkSectionModel,
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'районы-и-здания': {
          caption: 'районы-и-здания',
          title: 'районы-и-здания',
          'i-i-s-o-h-c-network-area-l': {
            caption: 'i-i-s-o-h-c-network-area-l',
            title: 'i-i-s-o-h-c-network-area-l'
          },
          'i-i-s-o-h-c-building-l': {
            caption: 'i-i-s-o-h-c-building-l',
            title: 'i-i-s-o-h-c-building-l'
          }
        },
        'о-т-п-и-клиенты': {
          caption: 'о-т-п-и-клиенты',
          title: 'о-т-п-и-клиенты',
          'i-i-s-o-h-c-heat-consumption-object-l': {
            caption: 'i-i-s-o-h-c-heat-consumption-object-l',
            title: 'i-i-s-o-h-c-heat-consumption-object-l'
          },
          'i-i-s-o-h-c-consumer-l': {
            caption: 'i-i-s-o-h-c-consumer-l',
            title: 'i-i-s-o-h-c-consumer-l'
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-o-h-c-building-l': IISOHCBuildingLForm,
    'i-i-s-o-h-c-consumer-l': IISOHCConsumerLForm,
    'i-i-s-o-h-c-heat-consumption-object-l': IISOHCHeatConsumptionObjectLForm,
    'i-i-s-o-h-c-network-area-l': IISOHCNetworkAreaLForm,
    'i-i-s-o-h-c-building-e': IISOHCBuildingEForm,
    'i-i-s-o-h-c-consumer-e': IISOHCConsumerEForm,
    'i-i-s-o-h-c-heat-consumption-object-e': IISOHCHeatConsumptionObjectEForm,
    'i-i-s-o-h-c-network-area-e': IISOHCNetworkAreaEForm,
  },

});

export default translations;
