var draw = SVG('create').size(1000, 600);
var rect = draw.rect(500, 300).attr({
	fill: '#DCF2F6',
	stroke: '#231F20',
});

rect.x(400);
rect.y(120);
rect.radius(5);

var image = draw.image('output.png', 300, 530);
image.x(470);

// #39A4DC Fill color.
// #39A4DC Stroke.
