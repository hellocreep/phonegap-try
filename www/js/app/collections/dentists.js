define(['dentist'], function(Dentist) {
	var Dentists = Backbone.Collection.extend({
		model: Dentist,
		url: '/ajax/p/den_list/',
		methodUrl: {
			'getconnected': '/ajax/p/den_list/',
			'getall': '/ajax/p/get-all-dentist/',
			'test': 'http://baidu.com',
		},
		sync: function(method, collection, options) {
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
					collection.set(result);
					if(options.callback) {
						options.callback(result);
					}
				}
			});
		}
	});

	return Dentists;
});