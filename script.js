'use strict'
let salaryFirst = prompt('Enter first month salary', '1');
console.log(salaryFirst);
let salarySecond = prompt('Enter second month salary', '2');
salaryFirst = Number(salaryFirst);
salarySecond = Number(salarySecond);
let sum = salaryFirst + salarySecond;
alert(`Your salary from mounth is: ${sum}`)
alert(`You have extra bonus! Your total salary was: ${sum} it's increase for 1$ and now it is: ${++sum}`)
const salary = sum;
if (salary > 2000) {
  alert("I'm ready to work");
} else {
  alert("I'm out");
}