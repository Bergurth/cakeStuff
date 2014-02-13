window.onload = function() 
{
    var CAKECanvas = new Canvas(document.body, 600, 400);
    
  
/*
    var line1 = new Line(
	{
	    id: 'line1',
	    x1: CAKECanvas.width / 5 * 2,
	    y1: CAKECanvas.height / 3,
	    x2: CAKECanvas.width / 3 * 2,
	    y2: CAKECanvas.height / 2,
	    //stroke: 'green',
	    //strokeWidth: 15
	}
);

    CAKECanvas.append(line1);
  
*/


// working add line
    var line2 = new Line(200,200,200,400);
    line2.stroke = 'green';
    line2.strokeWidth = 5;

    CAKECanvas.append(line2);


    var line3 = new Line(200,200,300,100);
    line3.stroke = 'green';
    line3.strokeWidth = 5;

    CAKECanvas.append(line3);


    var line4 = new Line(300,100,300+Math.cos(Math.PI/2)*50, 100-Math.sin(Math.PI/2)*50);
    line4.stroke = 'green';
    line4.strokeWidth = 5;

    CAKECanvas.append(line4);


    var startx = 200;
    var starty = 200;

    var i, s = 200;

/*
    for(i=0; i <= 10; i += 1){
	var finx1 = startx + startx/2;
	var finy1 = starty + starty/2;
	var i = new Line(startx, starty, finx1, finy1);
	i.stroke = 'green';
	i.strokeWidth = 3;
	CAKECanvas.append(i);
	startx = finx1;
	starty = finy1;
	console.log(startx);
    }
*/
 

/* 
// old tree 
    var finx, finy;

    var tree = function(strtx, strty, s, ang, len){
	if(s > 0) {
	    CAKECanvas.append(new Line(strtx, strty, Math.cos(ang) * (strtx + len / 2), Math.sin(ang) * (strty + len / 2)));
	    finx = Math.cos(ang) * (strtx + len / 2);
	    finy = Math.sin(ang) * (strty + len / 2);
	    tree( finx, finy, s-1, ang - Math.PI / 4 , 50);
	}
	return;
    };

    tree(100, 100, 10, Math.PI);

*/

//new tree
var atree = function(stx, sty, len, ang, deep){

    if(deep > 0) {
    	    var nwx = stx+Math.cos(ang)*len;
	    var nwy = sty-Math.sin(ang)*len;
    	CAKECanvas.append(new Line(stx, sty, nwx, nwy));
	    atree(nwx, nwy, len/2, ang-Math.PI/4, deep-1);
	    atree(nwx, nwy, len/2, ang+Math.PI/4, deep-1);
    }
    else {
    	 return;
    }


    };

    atree(200,400,200,Math.PI/2,15);

/*
//working add rectangel

    var rect = new Rectangle(100, 100)  // create a CAKE [Rectangle] object
    rect.x = 250                        // move the Rectangle to (250, 250)
    rect.y = 250
    rect.fill = 'green'     

    CAKECanvas.append(rect);

*/

/*
//non working add poly

    var poly = new Polygon(300, 400, 350)
    poly.x = 300
    poly.y = 300
    poly.fill = 'purple'
 
*/


// window on load shit 
};