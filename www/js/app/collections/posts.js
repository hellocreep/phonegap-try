define(['post'], 
function(Post){
	var Posts = Backbone.Collection.extend({
		model: Post,
		url: '/ajax/p/stream/getpost/',
		methodUrl: {
			'get': '/ajax/p/stream/getpost/',
		},
		sync: function(method, model, options) {
			var that = this;
			var result = '';
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
					// console.log(result)
					result = result;
				}
			});
		}
	});
	return Posts;
});