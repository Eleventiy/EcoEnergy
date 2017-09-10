// Snap.svg lines
var paper = Snap('#svgLines');

// Svg group
var line1 = paper.line(570, 173, 1251, 173);
line1.attr({
	stroke: '#ffffff',
	strokeWidth: 1,
	strokeDasharray: 900,
	strokeDashoffset: 1000,
	strokeOpacity: 0
});
Snap.animate(1000, 0, function(val) {
	line1.attr({
		strokeDashoffset: val,
		strokeOpacity: 1
	})
}, 3000);

setTimeout(function () {
	var rect1 = paper.rect(1251, 120, 274, 295),
		startPoints = [100, 100, 100],
		endPoints = [200, 200, 200];
	rect1.attr({
		points: startPoints,
		fillOpacity: 0,
		stroke: '#ffffff',
		strokeWidth: 1,
		strokeOpacity: 0
	});
	Snap.animate(1085, 0, function(val) {
		rect1.attr({
			points: endPoints,
			strokeOpacity: 1
		})
	}, 3000);
}, 2500);
