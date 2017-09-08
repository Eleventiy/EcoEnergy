window.onload = function() {
	//
	// ## Canvas lines ##
	//
	var $LinesCanvas = $('#LinesCanvas');
	$LinesCanvas.drawRect({
		layer: true,
		name: 'Line1',
		fillStyle: '#575c60',
		x: 0, y: 120,
		width: 1, height: 1
	});
	$LinesCanvas.drawRect({
		layer: true,
		name: 'Line2',
		fillStyle: '#575c60',
		x: 1251, y: 0,
		width: 1, height: 1
	});
	$LinesCanvas.drawRect({
		layer: true,
		name: 'Line3',
		fillStyle: '#575c60',
		x: 1526, y: 0,
		width: 1, height: 1
	});
	$LinesCanvas.drawRect({
		layer: true,
		name: 'Line4',
		fillStyle: '#575c60',
		x: 1656, y: 0,
		width: 1, height: 1
	});
	
  // Animate layer properties
	$LinesCanvas.animateLayer('Line1', {
		width: 4000, height: 1
	}, 1000, function(layer) {
		// Callback function
		$(this).animateLayer(layer, {

		}, 'slow', 'swing');
	});
	$LinesCanvas.animateLayer('Line2', {
		height: 3570,
	}, 1000, function(layer) {
		// Callback function
		$(this).animateLayer(layer, {

		}, 'slow', 'swing');
	});
	$LinesCanvas.animateLayer('Line3', {
		height: 3570,
	}, 1000, function(layer) {
		// Callback function
		$(this).animateLayer(layer, {

		}, 'slow', 'swing');
	});
	$LinesCanvas.animateLayer('Line4', {
		height: 3570,
	}, 1000, function(layer) {
		// Callback function
		$(this).animateLayer(layer, {

		}, 'slow', 'swing');
	});
	$LinesCanvas.animateLayer('Line5', {
		height: 970,
	}, 1000, function(layer) {
		// Callback function
		$(this).animateLayer(layer, {

		}, 'slow', 'swing');
	});
	
	// Появление полоски при клике на пункт
	$(".slider .flexslider-controls .flex-control-nav li.slide-text-1.flex-active").click(function () {
		for(i = 6; i <= 13; i++) {
			$LinesCanvas.removeLayer('Line'+i);
		}
		$LinesCanvas.drawRect({
			layer: true,
			name: 'Line6',
			fillStyle: '#575c60',
			x: 915, y: 175,
			width: 1, height: 1
		});
    // Animate layer properties
		$LinesCanvas.animateLayer('Line6', {
			width: 670, height: 1
		}, 1000, function(layer) {
			// Callback function
			$(this).animateLayer(layer, {
			
			}, 'slow', 'ease-in-out');
		});
	});
	
};