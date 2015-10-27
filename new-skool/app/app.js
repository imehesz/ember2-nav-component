import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  currentPath: "",
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
  currentPathDidChange: function() {
    console.log("mooo");
    App.set('currentPath', this.get('currentPath'));
  }.observes('currentPath')
});


loadInitializers(App, config.modulePrefix);

export default App;
