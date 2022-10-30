// functions shortcut
const d = document;
const print = (target, dir=false) => {
  let printArray = Array.from(target);
  if(printArray.length == 0) {
    dir ? console.dir(target) : console.log(target);
  } else {
    dir ? 
    printArray.forEach(element => console.dir(element)) :
    printArray.forEach(element => console.log(element));
  }
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
const pageReady = () => {
  selector('.loading').style.display = 'none';
  removeClass(selector('.main'), 'hide');
}
