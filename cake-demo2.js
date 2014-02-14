window.onload = function() 
{
    var CAKECanvas = new Canvas(document.body, 600, 400);
    
    var circle1 = new Circle(100, 
			     {
				 id: 'myCircle1',
				 x: CAKECanvas.width / 3,  
				 y: CAKECanvas.height / 2, 
				 stroke: 'blue', 
				 strokeWidth: 20,
				 endAngle: Math.PI*2
			     }
			    );
    
    circle1.addFrameListener(
	function(t, dt) 
	{
	    this.scale = Math.sin(t / 1000);
	}
    );
    
    CAKECanvas.append(circle1);

    var circle2 = new Circle(100, 
			     {
				 id: 'myCircle2',
				 x: CAKECanvas.width / 3 * 2,  
				 y: CAKECanvas.height / 2, 
				 stroke: 'pink', 
				 strokeWidth: 20,
				 endAngle: Math.PI*2
			     }
			    );
    
    circle2.addFrameListener(
	function(t, dt) 
	{
	    this.scale = Math.cos(t / 1000);
	}
    );
    
    CAKECanvas.append(circle2);

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
	
	//test
	//this.that.addFrameListener(function(t, dt){this.stroke = "'" + t/1000%250 + ',' + t/1000%250 + ',' + t/1000%250 + "'"});

	// working grow and disapear bottom up
	//this.that.addFrameListener(function(t, dt){ if((t / 1000 + this.depth / 3)%7 >= 3 ){this.visible = true;}else{this.visible = false}});

	// grows and then whole tree disapears at once
	this.that.addFrameListener(function(t, dt){ if((t / 1000 + this.depth / 3)%7 >= 3 ){this.visible = true;}});
	this.that.addFrameListener(function(t, dt){ if((t / 1000 ) % 7 >= 6){this.visible = false;}});
	/*
	this.that.every(500,function() 
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
	       ); */
     
	return this.that;
    };


/*
//new tree
var atree = function(stx, sty, len, ang, deep){

    if(deep > 0) {
    	    var nwx = stx+Math.cos(ang)*len;
	    var nwy = sty-Math.sin(ang)*len;
    	CAKECanvas.append(new greenLine(stx,sty,nwx,nwy));
	    atree(nwx, nwy, len/2, ang-Math.PI/4, deep-1);
	    atree(nwx, nwy, len/2, ang+Math.PI/4, deep-1);
    }
    else {
    	 return;
    }


    };
*/
//    atree(200,400,200,Math.PI/2,9);

    //atree(400,400,200,Math.PI/2,15);

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

   atreeS(200,400,200,Math.PI/2,7);


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
    var hello = new ElementNode(E('h2', 'Sunna Sæta'), 
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