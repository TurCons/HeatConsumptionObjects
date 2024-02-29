import Ember from 'ember';

export default Ember.Mixin.create({
  rtr: "valrtr",

  setTitles(parent) {
    // Добавление всплывающей подсказки к заголовкам полей и кнопкам.
    let labels = parent.find('label:not(.icon), .ui.button:not(.icon)');
    if(labels.length > 0) {
      labels = labels.toArray();
      labels.forEach(element => {
        let title = element.textContent;
        if ((Ember.$(element).attr('title') === undefined || Ember.$(element).attr('title').length === 0) && title.length > 0) {
          Ember.$(element).attr('title', title);
        }
      });
    }
  }
});
