$(function () {
	
	'use strict';
	
	$('#slider').flexslider({
		animation: "fade",
		direction:"vertical",
		slideshow: true,
		slideshowSpeed: 7000,
		animationSpeed: 0,
		manualControls: ".flex-control-nav li",
		useCSS: false
	});
	
	// SVG LineGroup1
	// if($(slide1).hasClass('flex-active')) {
	// 	$(svgLine1).addClass('animated');
	// 	$(svgRect1).addClass('animated');
	// } else {
	// 	$(svgLine1).removeClass('animated');
	// 	$(svgRect1).removeClass('animated');
	// }
	// SVG LineGroup2
	
	// SVG animation on header
	var slide1 = $('.slider .flexslider-controls .flex-control-nav li.slide-text-1'),
			slide2 = $('.slider .flexslider-controls .flex-control-nav li.slide-text-2'),
			slide3 = $('.slider .flexslider-controls .flex-control-nav li.slide-text-3'),
			slide4 = $('.slider .flexslider-controls .flex-control-nav li.slide-text-4'),
			slide5 = $('.slider .flexslider-controls .flex-control-nav li.slide-text-5'),
			slide6 = $('.slider .flexslider-controls .flex-control-nav li.slide-text-6'),
			slide7 = $('.slider .flexslider-controls .flex-control-nav li.slide-text-7'),
			slide8 = $('.slider .flexslider-controls .flex-control-nav li.slide-text-8'),
			svgLine1 = $('g .svg-line-1'),
			svgLine2 = $('g .svg-line-2'),
			svgLine3 = $('g .svg-line-3'),
			svgLine4 = $('g .svg-line-4'),
			svgLine5 = $('g .svg-line-5'),
			svgLine6 = $('#LineGroup6 .svg-line-6'),
			svgLine7 = $('#LineGroup7 .svg-line-7'),
			svgLine8 = $('#LineGroup8 .svg-line-8'),
			svgRect1 = $('#LineGroup1 .svg-rect-1'),
			svgRect2 = $('#LineGroup2 .svg-rect-2'),
			svgRect3 = $('#LineGroup3 .svg-rect-3'),
			svgRect4 = $('#LineGroup4 .svg-rect-4'),
			svgRect5 = $('#LineGroup5 .svg-rect-5'),
			svgRect6 = $('#LineGroup6 .svg-rect-6'),
			svgRect7 = $('#LineGroup7 .svg-rect-7'),
			svgRect8 = $('#LineGroup8 .svg-rect-8');
	
	// SVG LineGroup1
	if($(slide1).hasClass('flex-active')) {
		$(svgLine1).addClass('animated');
		$(svgRect1).addClass('animated');
	} else {
		$(svgLine1).removeClass('animated');
		$(svgRect1).removeClass('animated');
	}
	// SVG LineGroup2
	if($(slide2).hasClass('flex-active')) {
		$(svgLine2).addClass('animated');
		$(svgRect2).addClass('animated');
	}
	// SVG LineGroup3
	if($(slide3).hasClass('flex-active')) {
		$(svgLine3).addClass('animated');
		$(svgRect3).addClass('animated');
	} else {
		$(svgLine3).removeClass('animated');
		$(svgRect3).removeClass('animated');
	}
	// SVG LineGroup4
	if($(slide4).hasClass('flex-active')) {
		$(svgLine4).addClass('animated');
		$(svgRect4).addClass('animated');
	} else {
		$(svgLine4).removeClass('animated');
		$(svgRect4).removeClass('animated');
	}
	// SVG LineGroup5
	if($(slide5).hasClass('flex-active')) {
		$(svgLine5).addClass('animated');
		$(svgRect5).addClass('animated');
	} else {
		$(svgLine5).removeClass('animated');
		$(svgRect5).removeClass('animated');
	}
	// SVG LineGroup6
	if($(slide6).hasClass('flex-active')) {
		$(svgLine6).addClass('animated');
		$(svgRect6).addClass('animated');
	} else {
		$(svgLine6).removeClass('animated');
		$(svgRect6).removeClass('animated');
	}
	// SVG LineGroup7
	if($(slide7).hasClass('flex-active')) {
		$(svgLine7).addClass('animated');
		$(svgRect7).addClass('animated');
	} else {
		$(svgLine7).removeClass('animated');
		$(svgRect7).removeClass('animated');
	}
	// SVG LineGroup8
	if($(slide8).hasClass('flex-active')) {
		$(svgLine8).addClass('animated');
		$(svgRect8).addClass('animated');
	} else {
		$(svgLine8).removeClass('animated');
		$(svgRect8).removeClass('animated');
	}
	
	
	// Sticky navigation
	$(window).scroll(function(){
		var scrollOne = 75;
		if($(window).scrollTop() >= scrollOne){
			$('#topLine').addClass('top-line--fixed').animate('slow');
		}
		if($(window).scrollTop() <= scrollOne){
			$('.top-line').removeClass('top-line--fixed');
		}
		
		var scrollTwo = 700;
		if($(window).scrollTop() >= scrollTwo) {
			$('.dots-bg-wrap').css({
				opacity: '1',
				animation: 'slide-down 4s'
			});
			$('.welcome .block-right ul li img').css({
				opacity: '1',
				animation: 'slide-down-list 3s',
				'animation-fill-mode': 'forwards'
			})
		}
	});
	
	
	// Вычисление высоты шапки для разных экранов
	// function heightDetect() {
	// 	$('.main-header').css('height', $(window).height());
	// };
	// heightDetect();
	// $(window).resize(function() {
	// 	heightDetect();
	// });
	
	// Всплывающее меню в шапке
	$('#burgerNavLink').click(function(e) {
		e.preventDefault();
		$('#burgerNav').fadeToggle(220);
	});
	
	// Выбор языка
	$('#topLangLink').click(function(){
		var customOptionsBlock = $('#topLangOptions');
		if (customOptionsBlock.is(':hidden')) {
			$('#topLangOptions').show();
		}
		else {
			$('#topLangOptions').hide();
		}
	});
	$('#topLangOptions li').click(function(){
		var choosenValue = $(this).attr('data-value');
		$('select').val(choosenValue).prop('selected', true);
		$('#topLangOptions span').text($(this).text());
		$('#topLangLink').attr('data-value', choosenValue);
	});
	
	$('#bottomLangLink').click(function(){
		var customOptionsBlock = $('#bottomLangOptions');
		if (customOptionsBlock.is(':hidden')) {
			$('#bottomLangOptions').show();
		}
		else {
			$('#bottomLangOptions').hide();
		}
	});
	$('#bottomLangOptions li').click(function(){
		var choosenValue = $(this).attr('data-value');
		$('select').val(choosenValue).prop('selected', true);
		$('#bottomLangOptions span').text($(this).text());
		$('#bottomLangLink').attr('data-value', choosenValue);
	});
	
	// Всплывающий телефон
	$('.filter-news-select').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;
		
		$this.addClass('select-hidden');
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');
		
		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());
		
		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);
		
		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}
		
		var $listItems = $list.children('li');
		
		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});
		
		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
		});
		
		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});
	});
	
});