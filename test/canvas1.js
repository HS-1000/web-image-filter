var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(3, 3);
ctx.stroke();

let imgData = ctx.getImageData(0, 0, c.width, c.height);
imgData.data[0] = 180;
imgData.data[1] = 180;
imgData.data[2] = 180;
imgData.data[3] = 0;

console.log(imgData.data);
console.dir(imgData.data);