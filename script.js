'use strict'
let a = prompt('Enter the first number:');
let b = prompt('Enter the second number:');
function maxNumber(a, b) {
    if (a > b) {
      return a;
    } else if (b > a) {
      return b;
    } else {
      return 'a = b';
 }
}
alert(maxNumber(a, b));


let number = prompt('enter the number');
function reverseSign() {
    return -number;
}
alert(reverseSign());


let numberOn = prompt('Enter a number:');
let count = prompt('Enter a count:');
function thre(numberOn, count) {
    return numberOn + (3 * count);
}
alert(thre(+numberOn, +count));


let metric = prompt('Enter metric (m or cm):');
let km = prompt('Enter distance in km:');
function getMetric(metric, km, m, cm) {
    let result = 0;
    
    if (metric === 'm') {
      result = KmToM(km);
    } else if (metric === 'cm') {
      result = KmToCm(km);
    }
    
    return result;
  }
  
  function KmToM(km) {
    return km * 1000;
  }
  
  function KmToCm(km) {
    return km * 100000;
  }
  alert(getMetric(metric, +km, KmToM, KmToCm));
