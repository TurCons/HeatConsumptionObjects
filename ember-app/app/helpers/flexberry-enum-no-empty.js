import Ember from 'ember';
const { getOwner } = Ember;

export default Ember.Helper.extend({
  compute([enumName]) {
    let enumObj = getOwner(this).lookup('enum:' + enumName);
    let captions = {};
    for (let key in enumObj) {
      if (enumObj[key] !== null && enumObj[key] !== undefined && enumObj[key] !== '') {
        captions[key] = enumObj[key];
      }
    }
    return captions;
  }
});
