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
			'test': 'http://baidu.com',
			'delete': ''
		},
		localStorage: function() {
			localStorage['identalk_user'] = this.get('email');
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
					console.log(result)
					if(result.is_login) {
						that.localStorage();
						window.location.reload();
					} else {
						alert('Virify your email or password please.')
					}
				}
			});
		},
		initialize: function() {
			
		},
		checkSingin: function() {
			var user = localStorage['identalk_user'];
			if(user) {
				return true;
			} else {
				return false;
			}
		}
	});

	return User;
});