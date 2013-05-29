// requirejs.config({
// 	baseUrl: 'js',
// 	paths: {
// 		'cordova': 'vendor/cordova-2.7.0',
// 		'text': 'vendor/requirejs/text',
// 		'zepto': 'vendor/zepto.min',
// 		'underscore': 'vendor/underscore-min',
// 		'backbone': 'vendor/backbone-min'
// 	},
// 	shim: {

// 	}
// });

// require(
// ['cordova', 'zepto', 'underscore', 'backbone'],
// function(cordova, $, _, Backbone) {
// 	$(document).on('deviceready', function(){

// 	});
// });

// Local
requirejs.config({
	baseUrl: '/site_static/phonegap-try/www/js',
	paths: {
		'domReady': 'vendor/requirejs/domReady',
		'text': 'vendor/requirejs/text',
		'zepto': 'vendor/zepto.min',
		'underscore': 'vendor/underscore-min',
		'backbone': 'vendor/backbone/backbone-min',
		'localstorage': 'vendor/backbone/backbone.localStorage-min',
		'user': 'app/models/user',
		'post': 'app/models/post',
		'profile': 'app/models/profile',
		'dentist': 'app/models/dentist',
		'dentists': 'app/collections/dentists',
		'posts': 'app/collections/posts',
		'signin_view': 'app/views/sign-in',
		'timeline_view': 'app/views/timeline',
		'profile_view': 'app/views/profile',
		'denlist_view': 'app/views/denlist',
		'mydentist_view': 'app/views/my-dentist',
		'app': 'app/app',
		'router': 'app/router'
	},
	shim: {
		zepto: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['zepto', 'underscore'],
			exports: 'Backbone'
		},
		localstorage: {
			deps: ['backbone']
		},
		signin_view: {
			deps: ['zepto', 'underscore', 'backbone']
		},
		timeline_view: {
			deps: ['zepto', 'underscore', 'backbone']
		},
		profile_view: {
			deps: ['zepto', 'underscore', 'backbone']
		},
		denlist_view: {
			deps: ['zepto', 'underscore', 'backbone']
		},
		mydentist_view: {
			deps: ['zepto', 'underscore', 'backbone']
		}
	}
});

require(
['zepto', 'app', 'router', 'domReady!'],
function($, app, Router) {
	app.init();

	var router = new Router();
	// $('a').click(function(e) {
	// 	e.preventDefault();
	// })

	Backbone.history.start();

	
});