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
		'signin': 'app/views/sign-in'
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
['zepto', 'underscore', 'backbone', 'user', 'domReady!'],
function($, _, Backbone, User) {
	// require(['text!js/app/templates/sign-in.tmpl.html'], function(html) {
	// 	$('#content').append(html);
	// });
	var loadings = {
		show: function() {
			$('<div class="mask"><div class="loader">Loadings...</div></div>')
			.appendTo($('body'));
		},
		hide: function() {
			$('.mask').animate({
				opacity: 0
			}, 800, 'easing', function() {
				$(this).remove();
			});
		}	
	}

	loadings.show();
	var user = new User();
	if(user.checkSingin()) {
		user.set({
			email: 'test',
			password: 'test',
			username: 'test',
			is_login: true
		});
		$('.bar-title').show();

		var window_width = $(window).width();
		var	leftmune = window_width + 10;

		$('#leftmune').css({
			left: '-' + leftmune + 'px',
			visibility: 'visible'
		}).swipeLeft(function() {
			$(this).animate({
				left: '-'+ leftmune +'px',
			}, 800);
		});

		$('#swipe').tap(function() {
			$('#leftmune').animate({
				left: -100
			}, 800);
		});



		loadings.hide();
	} else {
		require(['signin'], function(signin) {
			var s = new signin;
			loadings.hide();
		});
	}
	
});