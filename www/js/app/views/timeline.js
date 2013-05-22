define(
['zepto', 'underscore', 'backbone', 'posts'],
function($, _, Backbone, Posts) {
	var Timeline = Backbone.View.extend({
		el: $('#timeline_panel'),
		template: _.template($('#timeline_tmpl').html()),
		initialize: function() {

		},
		render: function() {
			var posts = new Posts;
			var res = posts.sync('get');
			// posts.fetch();
			console.log(posts)
			this.$el.html(this.template({
				'content': 'test'
			}));
			
		}
	});

	return Timeline;
});