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
// hide loading page and show main
let pageLoad = false;
const pageReady = () => {
  selector('.loading').style.display = 'none';
  removeClass(selector('.main'), 'hide');
  pageLoad = true;
}
window.onload = () => {
  pageReady()
}
  
// const pageReady = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       selector('.loading').style.display = 'none';
//       removeClass(selector('.main'), 'hide');
//       resolve();
//     }, 100);
//   });
// }

// input file display at canvas element
const input2canvas = (input, canvas) => {
  print(1);
  if(!input.files || !pageLoad){
    print(2);
    return 0;
  }
  let imgFile = input.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(imgFile);
  reader.onloadend = event => {
    let img = new Image();
    img.src = event.target.result;
    img.onload = eve => {
      let context = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);
    }
  }
};
let inputImgFile = selector("#file_input");
let displayCanvas = selector("#input_canvas");
inputImgFile.addEventListener('change', (event) => {
  print(event.target, true);
  input2canvas(event.target, displayCanvas);
});




