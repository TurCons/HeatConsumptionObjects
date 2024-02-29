import Ember from 'ember';
import { Query } from 'ember-flexberry-data';
import { SimplePredicate, StringPredicate, DatePredicate } from 'ember-flexberry-data/query/predicate';
import tInstallationType from '../enums/i-i-s-o-h-c-t-installation-type';
import tSectionType from '../enums/i-i-s-o-h-c-t-section-type';

export default Ember.Mixin.create({
  datesWithTime: [],

  enums: {
    'i-i-s-o-h-c-t-installation-type': tInstallationType,
    'i-i-s-o-h-c-t-section-type': tSectionType,
  },

  predicateForFilter(filter) {
    var pred = null;

    let operation = Query.FilterOperator.Eq;
    switch (filter.condition) {
      case 'равно':
        operation = Query.FilterOperator.Eq;
        break;
      case 'не равно':
        operation = Query.FilterOperator.Neq;
        break;
      case 'меньше':
        operation = Query.FilterOperator.Le;
        break;
      case 'больше':
        operation = Query.FilterOperator.Ge;
        break;
    }

    if (filter.type === 'string') {
      switch (filter.condition) {
        case 'содержит':
          pred = new StringPredicate(filter.name).contains(filter.pattern);
          break;
        case 'пусто':
          pred = new SimplePredicate(filter.name, Query.FilterOperator.Eq, '');
          break;
        case 'не пусто':
          pred = new SimplePredicate(filter.name, Query.FilterOperator.Neq, '');
          break;
      }
    } else if (filter.type === 'decimal') {
      pred = new SimplePredicate(filter.name, operation, filter.pattern);
    } else if (filter.type === 'date') {
      let newDate = filter.pattern;
      let datesWithTime = this.get('datesWithTime');
      if (datesWithTime && datesWithTime.contains(filter.name)) {
       /* if (!Ember.isBlank(newDate)) {
          newDate = new Moment(filter.pattern);
          if (newDate.get('hour') === 0) {
            newDate = newDate.add(newDate.utcOffset(), 'm').toDate();
          } else {
            newDate = newDate.startOf('day').add(newDate.utcOffset(), 'm').toDate();
          }
        } */

        //если сравнивать даты нужно c временем, то
        pred = new DatePredicate(filter.name, operation, newDate);
      } else {
        pred = new DatePredicate(filter.name, operation, newDate, true);
      }
    } else if (filter.type === 'boolean') {
      let yes = ['TRUE', 'True', 'true', 'YES', 'Yes', 'yes', 'ДА', 'Да', 'да', '1', '+'];
      let no = ['False', 'False', 'false', 'NO', 'No', 'no', 'НЕТ', 'Нет', 'нет', '0', '-'];

      if (yes.indexOf(filter.pattern) > 0) {
        pred = new SimplePredicate(filter.name, operation, 'true');
      } else if (no.indexOf(filter.pattern) > 0) {
        pred = new SimplePredicate(filter.name, operation, 'false');
      }
    }
    else if (filter.component.name === 'flexberry-dropdown') {
      if (Object.keys(this.enums).indexOf(filter.type) > -1) {
        var currEnum = this.enums[filter.type];
        var newVal = this.findValueInEnum(filter.pattern, currEnum);
        pred = new SimplePredicate(filter.name, operation, newVal);
      }
    }

    if (!pred) {
      switch (filter.condition) {
        case 'равно':
        case 'не равно':
        case 'меньше':
        case 'больше':
          pred = new SimplePredicate(filter.name, operation, filter.pattern);
      }
    }

    if (!pred) {
      pred = this._super(...arguments);
    }

    return pred;
  },
  findValueInEnum(value, enm) {
    var key = null;
    Object.keys(enm).forEach(function (enumKey) {
      if (enm[enumKey] === value) {
        key = enumKey;
      }
    });
    return key;
  }
});
