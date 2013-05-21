define(['backbone'], function(Backbone) {
	var Router = Backbone.Router.extend({
		routes: {
			'': 'home',
			'left': 'left'	
		},
		home: function() {
			console.log('home')
		},
  		left: function() {
  			console.log('leftmenu')
  		},
	});

	return Router;
});