import EditFormRoute from 'ember-flexberry/routes/edit-form';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default EditFormRoute.extend(AuthenticatedRouteMixin, {
  hasMasterPage: true,
  modelProjection: 'BuildingE',
  modelName: 'i-i-s-o-h-c-building'
});
