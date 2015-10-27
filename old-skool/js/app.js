App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.route("moo");
  //this.route("index");
});

var currentRoute = "";
var setRoute = function(r) {
  if (currentRoute != r) {
    currentRoute = r;
  }
};

App.IndexRoute = Ember.Route.extend({
  init: function() {
    this._super.apply(this, arguments);
    setRoute("/");
  },
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.MooRoute = Ember.Route.extend({
  init: function() {
    this._super.apply(this, arguments);
    setRoute("moo");
  },
  model: function() {
    return ['moo', 'baa', 'lalala'];
  }
});

App.NavMenuComponent = Ember.Component.extend({
  init: function() {
    this._super.apply(this, arguments);
    for(var i=0; i<this.items.length; i++) {
      var navRoute = this.items[i];
      navRoute.isActive = false;
      if (navRoute.route == currentRoute) {
        navRoute.isActive = true;
      }
    }
  },
  tagName: "nav",
  items: [
    {route:"/", label:"Home"}, 
    {route:"moo", label:"Moo", isActive: true}
  ],
  actions: {
    setRoute: setRoute
  }
});
