define(
['zepto', 'underscore', 'backbone', 'user'],
function($, _, Backbone, User) {

	var _Swipeduration = 500

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


		// left & right swipe
		// later change into css3
		var window_width = $(window).width();
		var	menu_pos = window_width + 10;

		$('#leftmenu').css({
			left: '-' + menu_pos + 'px',
			visibility: 'visible'
		})

		$('#rightmenu').css({
			right: '-' + menu_pos + 'px',
			visibility: 'visible'
		});

		$('#home').swipeLeft(function() {
			$('#leftmenu').animate({
				left: '-'+ menu_pos +'px',
			}, _Swipeduration);
			$('#home').animate({
				left: 0
			}, _Swipeduration);
		});

		$('#home').swipeRight(function() {
			$('#rightmenu').animate({
				right: '-'+ menu_pos +'px',
			}, _Swipeduration);
			$('#home').animate({
				left: 0
			}, _Swipeduration);
		});

		$('#swipeleft').tap(function() {
			$('#leftmenu').animate({
				left: -100
			}, _Swipeduration);
			$('#home').animate({
				left: window_width - 100
			}, _Swipeduration);
		});

		$('#swiperight').tap(function() {
			$('#rightmenu').animate({
				right: -100
			}, _Swipeduration);
			$('#home').animate({
				left: '-' + (window_width - 100) + 'px'
			}, _Swipeduration);
		});

		//home
		$('#home_tab').tap(function() {
			$('#leftmenu').animate({
				left: '-'+ menu_pos +'px',
			}, _Swipeduration);
			$('#home').animate({
				left: 0
			}, _Swipeduration);
			
		});

		// profile
		$('#profile').tap(function() {
			$('#leftmenu').animate({
				left: '-'+ menu_pos +'px',
			}, _Swipeduration);
			$('#home').animate({
				left: 0
			}, _Swipeduration);
			$('.bar-standard').hide();
			$('#profile_panel').show().siblings().hide();
			$('.bar-tab').show();
		});

		$('.profile-tab').tap(function() {
			$(this).addClass('active').siblings().removeClass('active')
			$('#profile_panel').text($(this).text());
		});

		// densit
		$('#dentist').tap(function() {
			$('#leftmenu').animate({
				left: '-'+ menu_pos +'px',
			}, _Swipeduration);
			$('#home').animate({
				left: 0
			}, _Swipeduration);
			$('.bar-standard').show();
			$('#profile_panel').hide().siblings().hide();
			$('.bar-tab').hide();
		});

		//search
		$('#search').tap(function() {
			$('#leftmenu').animate({
				left: '-'+ menu_pos +'px',
			}, _Swipeduration);
			$('#home').animate({
				left: 0
			}, _Swipeduration);
			$('.bar-tab').hide();
			$('.bar-standard').hide();
			$('#search_panel').show().siblings().hide();
		});



		loadings.hide();
	} else {
		require(['signin'], function(signin) {
			var s = new signin;
			loadings.hide();
		});
	}
});