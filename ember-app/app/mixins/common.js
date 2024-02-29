import Ember from 'ember';

export default Ember.Mixin.create({
  /**
   * Состояние разрушения объекта.
   */
  destrState: function(obj) {
    if (obj === undefined || obj === null) {
      obj = this;
    }

    return obj.get('isDestroyed') || obj.get('isDestroying');
  }
});