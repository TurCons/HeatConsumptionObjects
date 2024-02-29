import ListFormRoute from 'ember-flexberry/routes/list-form';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
export function initialize() {
  ListFormRoute.reopen(AuthenticatedRouteMixin);
}

export default {
  name: 'list-form',
  initialize
};
