$(function () {
	
	$('#slider').flexslider({
		animation: "fade",
		direction:"vertical",
		slideshow: true,
		slideshowSpeed: 7000,
		animationSpeed: 0,
		manualControls: ".flex-control-nav li",
		useCSS: false
	});
	
	// SVG animation on header
	
	
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
		customOptionsBlock = $('#topLangOptions');
		if (customOptionsBlock.is(':hidden')) {
			$('#topLangOptions').show();
		}
		else {
			$('#topLangOptions').hide();
		}
	});
	$('#topLangOptions li').click(function(){
		choosenValue = $(this).attr('data-value');
		$('select').val(choosenValue).prop('selected', true);
		$('#topLangOptions span').text($(this).text());
		$('#topLangLink').attr('data-value', choosenValue);
	});
	
	$('#bottomLangLink').click(function(){
		customOptionsBlock = $('#bottomLangOptions');
		if (customOptionsBlock.is(':hidden')) {
			$('#bottomLangOptions').show();
		}
		else {
			$('#bottomLangOptions').hide();
		}
	});
	$('#bottomLangOptions li').click(function(){
		choosenValue = $(this).attr('data-value');
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