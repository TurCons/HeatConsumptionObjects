import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-o-h-c-building-l');
  this.route('i-i-s-o-h-c-building-e',
  { path: 'i-i-s-o-h-c-building-e/:id' });
  this.route('i-i-s-o-h-c-building-e.new',
  { path: 'i-i-s-o-h-c-building-e/new' });
  this.route('i-i-s-o-h-c-consumer-l');
  this.route('i-i-s-o-h-c-consumer-e',
  { path: 'i-i-s-o-h-c-consumer-e/:id' });
  this.route('i-i-s-o-h-c-consumer-e.new',
  { path: 'i-i-s-o-h-c-consumer-e/new' });
  this.route('i-i-s-o-h-c-heat-consumption-object-l');
  this.route('i-i-s-o-h-c-heat-consumption-object-e',
  { path: 'i-i-s-o-h-c-heat-consumption-object-e/:id' });
  this.route('i-i-s-o-h-c-heat-consumption-object-e.new',
  { path: 'i-i-s-o-h-c-heat-consumption-object-e/new' });
  this.route('i-i-s-o-h-c-network-area-l');
  this.route('i-i-s-o-h-c-network-area-e',
  { path: 'i-i-s-o-h-c-network-area-e/:id' });
  this.route('i-i-s-o-h-c-network-area-e.new',
  { path: 'i-i-s-o-h-c-network-area-e/new' });
  

    // Аудит.
     this.route('i-i-s-o-h-c-extended-audit-entity-l');
    // this.route('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l');
    this.route('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e',
        { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e/:id' });
    this.route('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e.new',
        { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e/new' });
    
    // flexberry-gis-test 
/*
    this.route('new-platform-flexberry-g-i-s-layer-metadata-l');
    this.route('new-platform-flexberry-g-i-s-layer-metadata-e',
    { path: 'new-platform-flexberry-g-i-s-layer-metadata-e/:id' });
    this.route('new-platform-flexberry-g-i-s-layer-metadata-e.new',
    { path: 'new-platform-flexberry-g-i-s-layer-metadata-e/new' });

*/
    this.route('maps');
    this.route('map', { path: 'maps/:id' });
    this.route('map.new', { path: 'maps/new' });

    this.route('login');
});

export default Router;
