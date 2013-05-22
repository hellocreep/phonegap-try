define(['app'], function(app) {
	var Router = Backbone.Router.extend({
		routes: {
			'': 'home',
			'home': 'home',
			'leftmenu': 'leftmenu',
			'rightmenu': 'rightmenu'
		},
		home: function() {
			console.log('home')
			app.home('show');
			app.timeline.show();
			// $.ajax({
			// 	type: 'POST',
			// 	url: '/ajax/p/stream/getpost/',
			// 	success: function(result) {
			// 		console.log(result)
			// 	}
			// });
		},
  		leftmenu: function() {
  			console.log('leftmenu');
  			app.leftmenu('show');
  		},
  		rightmenu: function() {
  			console.log('rightmenu');
  			app.rightmenu('show');
  		}
	});

	return Router;
});