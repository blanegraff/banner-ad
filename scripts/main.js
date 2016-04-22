// number of bubbles
var count = 70;

// create cirlces
var path = new Path.Circle({
	center: [0, 0],
	radius: 10,
	fillColor: '#dcdcdc',
	strokeColor: '#bdbdbd'
});

var symbol = new Symbol(path);

// circle positions
for (var i = 0; i < count; i++) {

	var center = Point.random() * view.size;
	var placedSymbol = symbol.place(center);
	placedSymbol.scale(i / count);
}

// add text & style
var text = new PointText({
	point: view.center,
	justification: 'center',
	fontSize: 17,
	fillColor: '#404040',

	//      text shadows
	shadowColor: new Color(0, 0, 0),
	// Set the shadow blur radius to 12:
	shadowBlur: 20,
	// Offset the shadow by { x: 5, y: 5 }
	shadowOffset: new Point(5, 5)

});

var destination = Point.random() * view.size;
// move text - random positions
function onFrame(event) {
	for (var i = 0; i < count; i++) {
		var item = project.activeLayer.children[i];

		item.position.x += item.bounds.width / 10;

		if (item.bounds.left > view.size.width) {
			item.position.x = -item.bounds.width;
		}
	}

	var vector = destination - text.position;

	text.position += vector / 50;
// text inside canvas
	text.content = "     > >  C H E C K O U T  M Y  P R O J E C T S  < <     ";
	
// distance between the path and the destination
	if (vector.length < 20) {
		destination = Point.random() * view.size;
	}
//  on click - brings you to project.js
	text.onClick = function (event) {
		OpenInNewTab("project.html");
	}

}

function OpenInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
}