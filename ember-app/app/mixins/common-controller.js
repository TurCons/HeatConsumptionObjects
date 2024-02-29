import Ember from 'ember';

export default Ember.Mixin.create({
  hideDesctopImage: false,
  paramsForReset: [],

  /**
  * Чистим параметры из transition.
  */
  _resetTransitionQueryParams: function (trans) {
    let paramsForReset = this.get('paramsForReset');
    if (trans !== undefined && trans.queryParams) {
      Ember.$.each(trans.queryParams, function (key) {
        if (paramsForReset && paramsForReset.contains(key)) {
          trans.queryParams[key] = null;
        }
      });
    }
  },

  actions: {

  }
});
