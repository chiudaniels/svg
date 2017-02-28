var svgEle = document.getElementbyID("svg");
var prevX = 0;
var prevY = 0;


var clicked = function(e){
    var circle=document.createElementNS("https://www.w3.org/2000/svg",circle);
    circle.setAttribute("cy",e.offsetY);
    circle.setAttribute("cy",e.offsetY);
    circle.setAttribute("r",50);
    circle.setAttribute("stroke","red");
    svgEle.appendChild(circle);
    if (prevX != 0 || prevY != 0){
	var line=document.createElementNS("https://www.w3.org/2000/svg",line);
	line.setAttribute("x1",prevX);
	line.setAttribute("y1",prevX);
	line.setAttribute("x2",e.offsetX);
	line.setAttribute("y2",e.offsetY);
	svgEle.appendChild(line);
    }
    prevX=e.offsetX;
    prevY=e.offsetY;
}
