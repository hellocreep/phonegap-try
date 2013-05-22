define(['zepto', 'underscore', 'backbone'], 
function($, _, Backbone){
	var Post = Backbone.Model.extend({
		defaults: {
			content: ''
		}
	});
	return Post;
});