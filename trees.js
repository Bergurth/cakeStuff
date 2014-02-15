window.onload = function() 
{

    var viewportwidth = window.innerWidth;
    var  viewportheight = window.innerHeight;
    //var CAKECanvas = new Canvas(document.body, 600, 400);
    var CAKECanvas = new Canvas(document.body, viewportwidth, viewportheight);

    function greenLine(x1,y1,x2,y2){
	this.that = new Line(x1,y1,x2,y2);
	this.that.stroke = 'green';
	return this.that;
    };

    function branchLine(x1,y1,x2,y2,depth){
	this.that = new Line(x1,y1,x2,y2);
	this.that.stroke = 'green';
	this.that.visible = false;
	this.that.depth = depth;
	// working grow and disapear bottom up
	//this.that.addFrameListener(function(t, dt){ if((t / 1000 + this.depth / 3)%7 >= 3 ){this.visible = true;}else{this.visible = false}});

	// grows and then whole tree disapears at once
	this.that.addFrameListener(function(t, dt){ if((t / 1000 + this.depth / 3)%7 >= 3 ){this.visible = true;}});
	this.that.addFrameListener(function(t, dt){ if((t / 1000 ) % 7 >= 6){this.visible = false;}});
	return this.that;
    };

    function lightningBranch(x1,y1,x2,y2,depth){
	this.that = new Line(x1,y1,x2,y2);
	this.that.stroke = 'blue';
	this.that.visible = false;
	this.that.depth = depth;
	// working grow and disapear bottom up
	this.that.addFrameListener(function(t, dt){ if((t / 1000 + this.depth / 3)%7 >= 3 ){this.visible = true;}else{this.visible = false}});
	return this.that;
    };


var atreeS = function(stx, sty, len, ang, deep){

    if(deep > 0) {
    	    var nwx = stx+Math.cos(ang)*len;
	    var nwy = sty-Math.sin(ang)*len;
    	//window.setInterval(CAKECanvas.append(new greenLine(stx,sty,nwx,nwy)),1000);
	CAKECanvas.append(new branchLine(stx,sty,nwx,nwy,deep));
	atreeS(nwx, nwy, len/2, ang-Math.PI/4, deep-1);
	atreeS(nwx, nwy, len/2, ang+Math.PI/4, deep-1);
    }
    else {
    	 return;
    }


    };

var lightning = function(stx, sty, len, ang, deep){

    if(deep > 0) {
		    if (ang <= -0.95 * Math.PI || ang >= -0.05 * Math.PI) {
		    ang = -Math.PI / 2;
		}


    	    var nwx = stx+Math.cos(ang)*len;
	    var nwy = sty-Math.sin(ang)*len;
	    var dang1 = Math.random() * (Math.PI/6 - Math.PI / 7) + Math.PI / 7;
	    var dang2 = Math.random() * (Math.PI/6 - Math.PI / 7) + Math.PI / 7;
	    /*  
	    if ((ang <= -0.8 * Math.PI || ang >= 1 - 0.8 * Math.PI) {
		    ang = -Math.PI / 2;
		};
		
	    */

    	//window.setInterval(CAKECanvas.append(new greenLine(stx,sty,nwx,nwy)),1000);
	CAKECanvas.append(new lightningBranch(stx,sty,nwx,nwy,deep));
	    if(Math.random() <= 0.8){
		lightning(nwx, nwy, 3 * len/4, ang-dang1, deep-1);
	    }
	    if(Math.random() <= 0.8){
	lightning(nwx, nwy, 3 * len/4, ang+dang2, deep-1);
	    }
    }
    else {
    	 return;
    }


    };

    //Math.random() * (max - min) + min;
    //atreeS(200,400,200,Math.PI/2,7);
    atreeS(CAKECanvas.width / 4,CAKECanvas.height,200,Math.PI/2,7);
    atreeS(CAKECanvas.width / 2,CAKECanvas.height,100,Math.PI/2,7);
    atreeS(3 * CAKECanvas.width / 4,CAKECanvas.height,150,Math.PI/2,7);

    lightning(5 * CAKECanvas.width / 8, 0, 200, -Math.PI/2,9);

    //atreeS(400,400,100,Math.PI/2,7);


    //atreeS(500,0,100,-Math.PI/2,7);



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
    var hello = new ElementNode(E('h2', 'Hugarfóstur'), 
				{
				    fontFamily: 'Arial, Sans-serif', 
				    noScaling: true, 
				    color: 'black',
				    x: CAKECanvas.width / 2, 
				    y: CAKECanvas.height / 2,
				    align: 'center',
				    valign: 'center'
				}
			       );
    
    hello.every(500, 
		function() 
		{
		    this.color = 'magenta';
		    this.after(200, 
			       function() 
			       {
				   this.color = 'blue';
			       }
			      );
		},
		true
	       );
    
    CAKECanvas.append(hello);
};