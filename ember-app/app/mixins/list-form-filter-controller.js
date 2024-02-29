import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    componentForFilter(type) {
      switch (type) {
        case 'date': return { name: 'flexberry-simpledatetime', properties: { type: 'date' } };
        case 'decimal': return { name: 'flexberry-textbox', properties: { class: 'compact fluid' } };
        case 'boolean': return { properties: { items: ['Да', 'Нет'] } };
        default: return {};
      }
    },

    conditionsByType(type) {
      switch (type) {
        case 'file':
          return null;

        case 'date':
        case 'number':
          return ['равно', 'не равно', 'меньше', 'больше'];

        case 'string':
          return ['равно', 'не равно', 'содержит', 'пусто', 'не пусто'];

        case 'boolean':
          return ['равно', 'не равно'];

        default:
          return ['равно', 'не равно'];
      }
    }
  }
});
