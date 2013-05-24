define(
['zepto', 'underscore', 'backbone', 'profile'],
function($, _, Backbone, Profile){
	var Profile_view = Backbone.View.extend({
		el: $('#info'),
		template: _.template($('#info_tmpl').html()),
		initialize: function() {
			var that = this;
			this.profile = new Profile;
			this.profile.sync('get', this.profile, {callback: function() {
				that.render();
			}});
		},
		render: function() {
			console.log(this.profile.get('Info').imagephoto);
			var avatar = this.profile.get('Info').imagephoto;
			$('#avatar').html('<img src="'+avatar+'">').show().siblings().hide();
			this.$el.html(this.template(this.profile.toJSON()))	
		}
	});

	return Profile_view;
});