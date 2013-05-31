define(
['zepto', 'underscore', 'backbone'],
function($, _, Backbone) {
	var Profile = Backbone.Model.extend({
		defaults: {

		},
		url: 'http://192.168.1.103:8000/ajax/p/profile/',
		methodUrl: {
			'get': 'http://192.168.1.103:8000/ajax/p/profile/',
			'test': 'http://baidu.com',
			'delete': ''
		},
		sync: function(method, model, options) {
			var that = this;
			if (this.methodUrl && this.methodUrl[method.toLowerCase()]) {
				options = options || {};
				options.url = this.methodUrl[method.toLowerCase()];
			}
			$.ajax({
				type: 'post',
				dataType: "json",
				url: options.url,
				data: {
					data: JSON.stringify(this)
				},
				success: function(result, status) {
					model.set(result);
					if(options.callback) {
						options.callback(result);
					}
				}
			});
		},
	});

	return Profile;
});