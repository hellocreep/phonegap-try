define(
['zepto', 'underscore', 'backbone', 'dentists'],
function($, _, Backbone, Dentists) {
	var Denlist = Backbone.View.extend({
		el: $('#denlist'),
		template: _.template('<li><img height="50" src="<%=avatar%>"><%=dentist_name%></li>'),
		// tagName: 'li',
		initialize: function() {
			var that = this;
			this.dentists = new Dentists;
			this.dentists.fetch();
			this.dentists.on('sync', function() {
				that.render();
			});
		},
		render: function() {
			var that = this;
			this.$el.empty();
			this.dentists.forEach(function(model) {
				that.$el.append(that.template(model.toJSON()));
			});
		}
	});

	return Denlist;
});