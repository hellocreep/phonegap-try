define(
['zepto', 'underscore', 'backbone', 'user'],
function($, _, Backbone, User) {
	var Signin = Backbone.View.extend({
		id: 'signin_form',
		el: $('#content'),
		template: _.template($('#sign_in_tmpl').html()),
		events: {
			'click #signin_btn': 'signin'
		},
		initialize: function() {
			this.render();
			this.user = new User;
		},
		render: function() {
			this.$el.html(this.template);
		},
		signin: function() {
			this.user.set({
				email: this.$el.find('input[name="email"]').val(),
				password: this.$el.find('input[name="password"]').val()
			});
			this.user.sync('signin');
		}
	});
	return Signin;
});