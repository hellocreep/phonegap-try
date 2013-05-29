define(['zepto', 'underscore', 'backbone'],
function($, _, Backbone) {
	var User = Backbone.Model.extend({
		defaults: {
			username: '',
			email: '',
			password: '',
			is_login: false
		},
		url: '',
		methodUrl: {
			'signin': 'http://192.168.1.102:8000/mobile-login/',
			'signup': '',
			'signout': 'http://192.168.1.102:8000/accounts/logout/',
			'test': 'http://baidu.com'
		},
		localStorage: function() {
			localStorage['identalk_email'] = this.get('email');
			// Not safe
			localStorage['identalk_password'] = this.get('password');
			localStorage['identalk_status'] = this.get('is_login')
		},
		sync: function(method, model, options) {
			var that = this;
			if (this.methodUrl && this.methodUrl[method.toLowerCase()]) {
				options = options || {};
				options.url = this.methodUrl[method.toLowerCase()];
			}
			// Backbone.sync(method, model, options);
			$.ajax({
				type: 'post',
				dataType: "json",
				url: options.url,
				data: {
					data: JSON.stringify(this)
				},
				success: function(result, status) {
					that.localStorage();
					model.set(result);
					if(options.callback) {
						options.callback(result);
					}
					console.log(result)
					// if(result.is_login) {
					// 	that.localStorage();
					// 	window.location.reload();
					// } else {
					// 	console.log('Virify your email or password please.');
					// }
				}
			});
		},
		initialize: function() {
			var that = this;
			this.on('change:is_login', function(model, is_login){
				console.log(is_login)
				that.set({is_login: is_login});
			});
			this.set({
				email: localStorage['identalk_email'],
				password: localStorage['identalk_password']
			});
			this.sync('signin', this);
			return this;
		}
	});

	return User;
});