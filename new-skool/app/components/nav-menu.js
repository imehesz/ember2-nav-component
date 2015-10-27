import Ember from 'ember';

var checkRoute = function(scope) {
  if (!scope) scope = this;

  var currentRoute = scope.container.lookup("controller:application").get("currentRouteName");
  for(var i=0; i<scope.items.length; i++) {
    var navRoute = scope.items[i];
    Ember.set(navRoute, "isActive", false);
    if (navRoute.route == currentRoute) {
      Ember.set(navRoute, "isActive", true);
    }
  }
};

var NavMenuComponent = Ember.Component.extend({
  init() {
    this._super.apply(this, arguments);
    checkRoute(this);
  },
  tagName: "nav",
  items: [
    {route:"index", label:"Home"}, 
    {route:"moo", label:"Moo"}
  ],
  actions: {
    checkRoute: checkRoute
  }
});

export default NavMenuComponent;
