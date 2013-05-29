define(
['zepto', 'underscore', 'backbone', 'dentists'],
function($, _, Backbone, Dentists) {
	var Mydentists = Backbone.View.extend({
		el: $('#mydentist'),
		template: _.template('<li></li>'),
		initialize: function() {
			var that = this;
			this.dentists = new Dentists;
			this.dentists.sync('getall', this.dentists, {callback: function() {
				that.render();
			}});
		},
		render: function() {
			alert(this)
		}
	});
	return Mydentists;
});