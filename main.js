'use strict';



function createGernrateUrl(url){
    return function(imageName){
      return url + imageName;
    }
};

let urlIcons = createGernrateUrl('https://maydomain.ru/icons/');
let urlImages = createGernrateUrl('https://maydomain.ru/images/');

console.log(urlIcons('colck.svg.super/'));
console.log(urlIcons('man.png//create//'));