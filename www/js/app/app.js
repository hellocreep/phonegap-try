define(
['zepto', 'underscore', 'backbone', 'user'],
function($, _, Backbone, User) {

	var App = {
		_Animateduration: 500,
		window_width: $(window).width(),
		menu_pos: $(window).width() + 10,
		loadings: {
			show: function() {
			$('<div class="mask"><div class="loader">Loadings...</div></div>')
				.appendTo($('body'));
			},
			hide: function() {
				$('.mask').animate({
					opacity: 0
				}, App._Animateduration, 'easing', function() {
					$(this).remove();
				});
			}
		},
		init: function() {
			var that = this;

			// show loader
			that.loadings.show();

			var user = new User();
			
			// Check signin fucking twice 
			user.sync('signin', user, {callback: function() {
				console.log(user)

				if(user.get('is_login')) {

					// reset the menu position
					$('.bar-title').show();
					$('#leftmenu').css({
						left: -that.menu_pos,
					})
					$('#rightmenu').css({
						right: -that.menu_pos,
					});

					// Top nav	
					$('.top-nav').tap(function() {
						var $this = $(this),
							dir = $this.data('dir');
						if(dir === 'left') {
							that.leftmenu('show');	
						} else {
							that.rightmenu('show');
						}
					});

					// Left nav
					$('.left-nav').tap(function() {
						var $this = $(this);
						that.home('show');
						$($this.attr('href')).show().siblings().hide();
						// get profile
						if(this.id === 'profile') {
							require(['profile_view'], function(Profile) {
								var profile = new Profile;
							});
						}
						if(this.id === 'dentist') {
							require(['mydentist_view'], function(Dentist) {
								var dentist = new Dentist;
							});
						}
					});

					// home swipe
					$('#main').swipeLeft(function() {
						that.home('show');
					})
					.swipeRight(function() {
						that.home('show');
					});

					// init timeline
					require(['timeline_view'], function(Timeline) {
						var timeline = new Timeline;
					});

					// init dentist list
					require(['denlist_view'], function(Denlist) {
						var denlist = new Denlist;
					});

					// profile tab
					$('.tab').tap(function() {
						var $this = $(this);
						$this.addClass('active').siblings().removeClass('active');
						$($this.data('target')).show().siblings().hide();
					});

					// // mydentist tab
					// $('.dentist-tab').tap(function() {
					// 	var $this = $(this);

					// });

				} else {
					// signin form tmpl
					require(['signin_view'], function(Signin) {
						var signin = new Signin;
					});
				}

				// hide the loader
				that.loadings.hide();
			}});	
			
		},
		home: function(show) {
			var that = this,
				hash = window.location.hash;

			var offset = that.window_width - 100;
			if(hash === '#rightmenu') {
				offset = -offset;
			}
			if(show === 'show') {
				offset = 0;
				that.leftmenu('hide');
				that.rightmenu('hide');
			}
			$('#main').css({
				left: offset
			});
		},
		leftmenu: function(show) {
			var that = this;
			if(show === 'show') {
				$('#leftmenu').css({
					left: -100,
					visibility: 'visible'
				});
				that.home('hide');
				that.rightmenu('hide');
			} else {
				$('#leftmenu').css({
					left: -that.menu_pos,
				});
			}
		},
		rightmenu: function(show) {
			var that = this;
			if(show === 'show') {
				$('#rightmenu').css({
					right: -100,
					visibility: 'visible'
				});
				that.home('hide');
				that.leftmenu('hide');
			} else {
				$('#rightmenu').css({
					right: -that.menu_pos,
				});
			}
		},
		timeline: {
			show: function() {
				$('#timeline_panel').show().siblings().hide();	
			}
		}
	}

	return App;

});