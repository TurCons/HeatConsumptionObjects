import Ember from 'ember';

export default Ember.Mixin.create({
    goToNewTab(formName, parameters=null, id=null){
        var url = null;
        if(id){
          url = `${window.location.origin}/#/${formName}/${id}`;
        }
        else{
          url = `${window.location.origin}/#/${formName}`;
        }
        if(parameters){
          url += '?';
          Object.keys(parameters).forEach((paramName) => {
            url += `${paramName}=${parameters[paramName]}&`;
          });
        }
        window.open(url, '_blank');
      },
});
