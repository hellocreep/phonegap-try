define(
['zepto', 'underscore', 'backbone', 'posts'],
function($, _, Backbone, Posts) {
	var Timeline = Backbone.View.extend({
		el: $('#timeline_panel'),
		// tagName: 'li',
		template: _.template($('#timeline_tmpl').html()),
		initialize: function() {
			var that = this;
			this.posts = new Posts;
			// this.posts.sync('get');
			this.posts.fetch();
			this.posts.on('sync', function() {
				that.render();
			})
		},
		render: function() {
			var that = this;
			console.log(that.posts);

			this.posts.forEach(function(model) {
				console.log(model)
				// that.$el.append(that.template(model.toJSON()))
				that.renderOne(model);
			});
			this.$el.show();
			// this.$el.html(this.template(this.posts.toJSON()));
			
		},
		renderOne: function(item) {
			this.$el.append(this.template(item.toJSON()));
		} 
	});

	return Timeline;
});