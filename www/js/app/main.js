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
	baseUrl: 'js',
	paths: {
		'domReady': 'vendor/requirejs/domReady',
		'text': 'vendor/requirejs/text',
		'zepto': 'vendor/zepto.min',
		'underscore': 'vendor/underscore-min',
		'backbone': 'vendor/backbone/backbone-min',
		'localstorage': 'vendor/backbone/backbone.localStorage-min',
		'user': 'app/models/user',
		'signin': 'app/views/sign-in',
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
		signin: {
			deps: ['zepto', 'underscore', 'backbone']
		}
	}
});

require(
['zepto', 'app', 'router', 'domReady!'],
function($, app, Router) {
	var router = new Router();

	Backbone.history.start();

	// require(['text!js/app/templates/sign-in.tmpl.html'], function(html) {
	// 	$('#content').append(html);
	// });
	
	
});