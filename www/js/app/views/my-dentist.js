define(
['zepto', 'underscore', 'backbone', 'dentists'],
function($, _, Backbone, Dentists) {
	var Mydentists = Backbone.View.extend({
		el: $('.my-dentist'),
		template: _.template('<li><img height="50" src="<%=avatar%>"><%=dentist_name%></li>'),
		initialize: function() {
			var that = this;
			this.dentists = new Dentists;
			// just get data not real collection
			this.dentists.sync('getall', this.dentists, {callback: function() {
				that.render();
			}});
		},
		render: function() {
			var that = this;
			console.log(this.dentists)	
			console.log(this.dentists.models[0].attributes.connected_count)
			var follow_den = this.dentists.models[0].attributes.Follow_List,
				connect_den = this.dentists.models[0].attributes.Connected_List,
				request_den = this.dentists.models[0].attributes.Connecting_List;

			if(follow_den.length > 0) {
				$.each(connect_den, function(index, item) {
					that.renderOne(item, '#follow_den');
				});
			}
			if(connect_den.length > 0) {
				$.each(connect_den, function(index, item) {
					that.renderOne(item, '#con_den');
				});
			}
			if(request_den.length > 0) {
				$.each(connect_den, function(index, item) {
					that.renderOne(item, '#req_den');
				});
			}
		},
		renderOne: function(item, target) {
			this.$el.find(target).html(this.template({
				avatar: item.avatar,
				dentist_name: item.dentist_name
			}));
		}
	});
	return Mydentists;
});