
// number of bubbles
var count = 50;

// create cirlces
var path = new Path.Circle({
	center: [0, 0],
	radius: 10,
	fillColor: '#016451',
	strokeColor: '#007660'
});

var symbol = new Symbol(path);


for (var i = 0; i < count; i++) {
    
	var center = Point.random() * view.size;
	var placedSymbol = symbol.place(center);
	placedSymbol.scale(i / count);
}

// add text & style
var text = new PointText({
	point: view.center,
	justification: 'center',
	fontSize: 20,
	fillColor: 'black',
    
//      text shadows
    shadowColor: new Color(0, 0, 0),
    // Set the shadow blur radius to 12:
    shadowBlur: 18,
    // Offset the shadow by { x: 5, y: 5 }
    shadowOffset: new Point(5, 5)
    
});

var destination = Point.random() * view.size;

function onFrame(event) {
	for (var i = 0; i < count; i++) {
		var item = project.activeLayer.children[i];
		
		item.position.x += item.bounds.width / 20;

		if (item.bounds.left > view.size.width) {
			item.position.x = -item.bounds.width;
		}
	}
    
    var vector = destination - text.position;
	
	
	text.position.x = 120;
	
	text.content = "CLICK to See My Projects";
	text.onClick = function(event) {
        OpenInNewTab("project.html");
}
    
}

function OpenInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}