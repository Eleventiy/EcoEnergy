window.onload = function() {
	var $myCanvas3 = $('#myCanvas3');
	$myCanvas3.drawRect({
		layer: true,
		name: 'Line1',
		fillStyle: '#575c60',
		x: 0, y: 121,
		width: 1, height: 1
	});
	$myCanvas3.drawRect({
		layer: true,
		name: 'Line2',
		fillStyle: '#575c60',
		x: 450, y: 0,
		width: 1, height: 1
	});
	
	$myCanvas3.drawRect({
		layer: true,
		name: 'Line3',
		fillStyle: '#575c60',
		x: 1240, y: 0,
		width: 1, height: 1
	});
	$myCanvas3.drawRect({
		layer: true,
		name: 'Line4',
		fillStyle: '#575c60',
		x: 1515, y: 0,
		width: 1, height: 1
	});
	$myCanvas3.drawRect({
		layer: true,
		name: 'Line5',
		fillStyle: '#575c60',
		x: 1795, y: 607,
		width: 1, height: 1
	});
	$myCanvas3.drawRect({
		layer: true,
		name: 'Line6',
		fillStyle: '#575c60',
		x: 1518, y: 450,
		width: 1, height: 1
	});
// Animate layer properties
	$myCanvas3.animateLayer('Line1', {
		width: 3592, height: 1
	}, 1000, function(layer) {
		// Callback function
		$(this).animateLayer(layer, {
		
		}, 'slow', 'swing');
	});
	$myCanvas3.animateLayer('Line2', {
		height: 3570,
	}, 1000, function(layer) {
		// Callback function
		$(this).animateLayer(layer, {
		
		}, 'slow', 'swing');
	});
	$myCanvas3.animateLayer('Line3', {
		height: 3570,
	}, 1000, function(layer) {
		// Callback function
		$(this).animateLayer(layer, {
		
		}, 'slow', 'swing');
	});
	$myCanvas3.animateLayer('Line4', {
		height: 3570,
	}, 1000, function(layer) {
		// Callback function
		$(this).animateLayer(layer, {
		
		}, 'slow', 'swing');
	});
	$myCanvas3.animateLayer('Line5', {
		height: 970,
	}, 1000, function(layer) {
		// Callback function
		$(this).animateLayer(layer, {
		
		}, 'slow', 'swing');
	});
	$myCanvas3.animateLayer('Line6', {
		width: 555,
	}, 1000, function(layer) {
		// Callback function
		$(this).animateLayer(layer, {
		
		}, 'slow', 'swing');
	});
	
	$(".header-bg-text").animate({opacity: "0.08"}, 800);
	$(".container .content-header .nav .change-language").animate({opacity: "1"}, 2000);
	
	
	$('#slider').flexslider({
		animation: "fade",
		direction:"vertical",
		slideshow: true,
		slideshowSpeed: 7000,
		animationSpeed: 0,
		manualControls: ".flex-control-nav li",
		useCSS: false /* Chrome fix*/
	});
	
	
	$(".container .content-header .slider .flexslider-controls .flex-control-nav li").click(function () {
		for(i = 1 ; i <= 6; i++){
			$myCanvas3.removeLayer('Line'+i);
		}
		$myCanvas3.drawRect({
			layer: true,
			name: 'Line1',
			fillStyle: '#575c60',
			x: 0, y: 121,
			width: 1, height: 1
		});
		$myCanvas3.drawRect({
			layer: true,
			name: 'Line2',
			fillStyle: '#575c60',
			x: 450, y: 0,
			width: 1, height: 1
		});
		
		$myCanvas3.drawRect({
			layer: true,
			name: 'Line3',
			fillStyle: '#575c60',
			x: 1240, y: 0,
			width: 1, height: 1
		});
		$myCanvas3.drawRect({
			layer: true,
			name: 'Line4',
			fillStyle: '#575c60',
			x: 1515, y: 0,
			width: 1, height: 1
		});
		$myCanvas3.drawRect({
			layer: true,
			name: 'Line5',
			fillStyle: '#575c60',
			x: 1795, y: 607,
			width: 1, height: 1
		});
		$myCanvas3.drawRect({
			layer: true,
			name: 'Line6',
			fillStyle: '#575c60',
			x: 1518, y: 450,
			width: 1, height: 1
		});
// Animate layer properties
		$myCanvas3.animateLayer('Line1', {
			width: 3592, height: 1
		}, 1000, function(layer) {
			// Callback function
			$(this).animateLayer(layer, {
			
			}, 'slow', 'swing');
		});
		$myCanvas3.animateLayer('Line2', {
			height: 3570,
		}, 1000, function(layer) {
			// Callback function
			$(this).animateLayer(layer, {
			
			}, 'slow', 'swing');
		});
		$myCanvas3.animateLayer('Line3', {
			height: 3570,
		}, 1000, function(layer) {
			// Callback function
			$(this).animateLayer(layer, {
			
			}, 'slow', 'swing');
		});
		$myCanvas3.animateLayer('Line4', {
			height: 3570,
		}, 1000, function(layer) {
			// Callback function
			$(this).animateLayer(layer, {
			
			}, 'slow', 'swing');
		});
		$myCanvas3.animateLayer('Line5', {
			height: 970,
		}, 1000, function(layer) {
			// Callback function
			$(this).animateLayer(layer, {
			
			}, 'slow', 'swing');
		});
		$myCanvas3.animateLayer('Line6', {
			width: 555,
		}, 1000, function(layer) {
			// Callback function
			$(this).animateLayer(layer, {
			
			}, 'slow', 'swing');
		});
	});
};

$(function () {
	
	// Вычисление высоты шапки для разных экранов
	function heightDetect() {
		$(".main-header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	
	// Всплывающее
	$(".filter-news-select").each(function(){
		var $this = $(this), numberOfOptions = $(this).children("option").length;
		
		$this.addClass("select-hidden");
		$this.wrap("<div class='select'></div>");
		$this.after("<div class='select-styled'></div>");
		
		var $styledSelect = $this.next("div.select-styled");
		$styledSelect.text($this.children("option").eq(0).text());
		
		var $list = $("<ul />", {
			"class": "select-options"
		}).insertAfter($styledSelect);
		
		for (var i = 0; i < numberOfOptions; i++) {
			$("<li />", {
				text: $this.children("option").eq(i).text(),
				rel: $this.children("option").eq(i).val()
			}).appendTo($list);
		}
		
		var $listItems = $list.children("li");
		
		$styledSelect.click(function(e) {
			e.stopPropagation();
			$("div.select-styled.active").not(this).each(function(){
				$(this).removeClass("active").next("ul.select-options").hide();
			});
			$(this).toggleClass("active").next("ul.select-options").toggle();
		});
		
		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass("active");
			$this.val($(this).attr("rel"));
			$list.hide();
		});
		
		$(document).click(function() {
			$styledSelect.removeClass("active");
			$list.hide();
		});
	});
	
});