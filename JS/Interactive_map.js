(function Interactive_map(){
	"use strict";
	let body = document.querySelector("body"),
	 	svg_map = document.querySelector(".svg_map"),
	 	cursBlock =  document.getElementById("coords1"),
		interactive_map = document.querySelector(".interactive_map"),
	 	img = document.querySelector(".sect_main_img2");

	let defineMatrix = function(){return getComputedStyle(svg_map,null).getPropertyValue("transform").match(/-(\d+\.\d+)|(\d+\.\d+)|(\d+)|(-\d+)/g).map((el)=>+el)}; 
	let matrix, scale, delta, down, x1, y1, x2, y2, shiftX, shiftY;	
	
	
//---------------------------------------------------------------------------------------------------//
//-----------------------------------------------SCALE-----------------------------------------------//
//---------------------------------------------------------------------------------------------------//
	let scaleX1, scaleY1, scaleX2, scaleY2;
	let zooming = (evt)=>{
		cursBlock.textContent = "+scale = " + scale;//show scale
		
		img.setAttribute("style", `transform: matrix(${scale}, ${matrix[1]}, ${matrix[2]}, ${scale}, ${matrix[4]}, ${matrix[5]})`);//change scale in img
  	 	svg_map.style.transform = `matrix(${scale}, ${matrix[1]}, ${matrix[2]}, ${scale}, ${matrix[4]}, ${matrix[5]})`;//change scale in svg_map
     	
    	scaleX2 = evt.offsetX;//define x2 after change scale +
    	scaleY2 = evt.offsetY;//define y2 after change scale +

    	shiftX = matrix[4] + (scaleX2 - scaleX1)*scale;//define shift coord after zooming
    	shiftY = matrix[5] + (scaleY2 - scaleY1)*scale;//define shift coord after zooming
    	 	
    	img.setAttribute("style", `transform: matrix(${scale}, ${matrix[1]}, ${matrix[2]}, ${scale}, ${shiftX}, ${shiftY})`);//shift coord back 
    	svg_map.style.transform = `matrix(${scale}, ${matrix[1]}, ${matrix[2]}, ${scale}, ${shiftX}, ${shiftY})`;//shift coord back 
	};

	let scaleFun = function(evt){
		evt.preventDefault();
		delta = evt.deltaY || evt.detail || evt.wheelDelta;//scroll mouse wheel +/-
    	matrix = defineMatrix();//define css attribute (transform:matrix) //it's a massive//
		scale = matrix[0];//define scale from matrix
    	
    	if(delta > 0 && scale < 5) {//mouse wheel +  
    	 	scale += 0.1;
    	 	zooming(evt);
    	}
    	else if(delta < 0 && scale > 0.5){//mouse wheel -
    	 	scale -= 0.1;
    	 	zooming(evt);
    	}
	};

	interactive_map.addEventListener("mousewheel", scaleFun);

//---------------------------------------------------------------------------------------------------//
//-----------------------------------------------SHIFT-----------------------------------------------//
//---------------------------------------------------------------------------------------------------//

	// let shiftCoord = function(x1,y1,x2,y2){
	// 	if(x1>x2 && y1>y2) return [(x1-x2)*-1,(y1-y2)*-1];//shift left-top corner
	// 	else if(x1>x2 && y1<y2) return [(x1-x2)*-1,y2-y1];//shift left-down corner
	// 	else if(x1<x2 && y1<y2) return [x2-x1,y2-y1];//shift right-down corner
	// 	else if(x1<x2 && y1>y2) return [x2-x1,(y1-y2)*-1];//shift right-top corner
	// };

	let mouseMoveFun = (evt)=>{
		scaleX1 = evt.offsetX;//define x1 before change scale +/-
    	scaleY1 = evt.offsetY;//define y1 before change scale +/-
		if(down){
			window.drugger=false;
			matrix = defineMatrix();
			x2 = evt.clientX;//second coord X2 (mouse move)
			y2 = evt.clientY;//second coord Y2 (mouse move)
			
			shiftX =matrix[4] + (x2 - x1);//X2 - X1
			shiftY = matrix[5] + (y2 - y1);//Y2 - Y1 

			svg_map.style.transform = `matrix(${matrix[0]}, ${matrix[1]}, ${matrix[2]}, ${matrix[3]}, ${shiftX}, ${shiftY})`;//change position svg
			img.setAttribute("style", `transform: matrix(${matrix[0]}, ${matrix[1]}, ${matrix[2]}, ${matrix[3]}, ${shiftX}, ${shiftY})`);//change position img
			
			// matrix = defineMatrix();

			// cursBlock.textContent = `
			// 	X1:  ${x1}
			// 	Y1: ${y1}
			// 	X2: ${x2}
			// 	Y2: ${y2}
			// 	shiftX: ${shiftX}
			// 	shiftY: ${shiftY}
			// `;

			x1 = x2;//after shift X1 became X2 
			y1 = y2;//after shift Y1 became Y2	
		}
	};

	let mouseUpFun = (evt)=>{
		down = false;//block mouse move eventlistener
	};

	let mouseDownFun = (evt)=>{
	//	alert("map")
		down = true;//was a mouse down 
		window.drugger = true;
		x1 = evt.clientX;//first coord X1 (mouse down)
		y1 = evt.clientY;//first coord Y1 (mouse down)
		
		cursBlock.textContent = "x1: "+ x1 + " y1: "+ y1;	  	
	};

	//events: down -> move -> up -> click
	interactive_map.addEventListener("mousedown", mouseDownFun);
	interactive_map.addEventListener("mousemove", mouseMoveFun);
	body.addEventListener("mouseup", mouseUpFun);
	//interactive_map.addEventListener("click", (evt)=>drugger?cursBlock.textContent = "drugger":cursBlock.textContent = "click");
})();
