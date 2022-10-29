var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(3, 3);
ctx.stroke();

let imgData = ctx.getImageData(0, 0, c.width, c.height);
console.log(imgData);
console.dir(imgData);