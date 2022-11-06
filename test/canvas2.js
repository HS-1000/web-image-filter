// functions shortcut
const d = document;
const print = (target, dir=false) => {
  dir ? console.dir(target) : console.log(target);
}
const selector = (target, from=d) => {
  return from.querySelector(target);
}
const selectorAll = (target, from=d) => {
  return from.querySelectorAll(target);
}
const addClass = function (element, classStr) {
  element.classList.add(classStr);
};
const removeClass = function (element, classStr) {
  element.classList.remove(classStr);
};
const toggleClass = function (element, classStr) {
  element.classList.toggle(classStr);
};
const hasClass = function (element, className) {
  return element.classList.contains(className);
};
const clearClass = function (element) {
  while (element.classList.length > 0) {
    removeClass(element, element.classList.item(0));
  }
};

// const canvasResize = (canvas, scale=0.5) => {
//   let context = canvas.getContext("2d");
//   let img = new Image();
//   img.onload = () => {
//     canvas.height = canvas.width * (img.height / img.width);
//     let newCanvas = document.createElement('canvas');
//     newContext = canvas.getContext("2d");
//     newCanvas.width = img.width * scale;
//     newCanvas.height = img.height * scale;
//     newContext.drawImage(img, 0, 0, newCanvas.width, newCanvas.height);
//     newContext.drawImage(newContext, 0, 0, newContext.width*scale, newContext.height*scale);
//     context.drawImage(newContext, 0, 0, newCanvas.width*scale, newCanvas.height*scale, 0, 0, canvas.width, canvas.height);
//   }
//   img.src = "../cat3.jpg"

// }

const a = function() {
  let imgInput = document.getElementById('imageInput');
  imgInput.addEventListener('change', function(e) {
    if(e.target.files) {
      console.log('e.target', e.target);
      console.log('input tag', imgInput);
      let imageFile = e.target.files[0]; //here we get the image file
      var reader = new FileReader(); 
      reader.readAsDataURL(imageFile);
      reader.onloadend = function (e) {
        var myImage = new Image(); // Creates image object
        console.log('e in reader.onloadend', e);
        myImage.src = e.target.result; // Assigns converted image to image object
        console.log(e.target.result);
        myImage.onload = function(ev) {
          var myCanvas = document.getElementById("myCanvas"); // Creates a canvas object
          var myContext = myCanvas.getContext("2d"); // Creates a contect object
          myCanvas.width = myImage.width; // Assigns image's width to canvas
          myCanvas.height = myImage.height; // Assigns image's height to canvas
          myContext.drawImage(myImage,0,0); // Draws the image on canvas
          // let imgData = myCanvas.toDataURL("image/jpeg",0.75); // Assigns image base64 string in jpeg format to a variable
        }
      }
    }
  });

};

// canvasResize(document.querySelector("#result_canvas"));

// let input = document.querySelector('input');
// input.addEventListener('change', () => {

//   let src = cv.imread(document.querySelector('canvas'));
//   console.log('image width: ' + src.cols + '\n' +
//             'image height: ' + src.rows + '\n' +
//             'image size: ' + src.size().width + '*' + src.size().height + '\n' +
//             'image depth: ' + src.depth() + '\n' +
//             'image channels ' + src.channels() + '\n' +
//             'image type: ' + src.type() + '\n');  
// });

let cat = selector("#resize_test");
let canvas = selector("#result_canvas");
canvas.width = cat.width / 2;
canvas.height = cat.height / 2;
let context = canvas.getContext("2d");
context.drawImage(cat, 0, 0, cat.width, cat.height, 
                  100, 100, canvas.width, canvas.height);

