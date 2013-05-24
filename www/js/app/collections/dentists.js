define(['dentist'], function(Dentist) {
	var Dentists = Backbone.Collection.extend({
		model: Dentist,
		url: '/ajax/p/den_list/'
	});

	return Dentists;
});