'use strict'
let ageYou = prompt('How old are you?');
if (ageYou < 17) {
  let school = confirm('Do you study at school?');
  if (school) {
    alert('Keep up the good work!');
  } else {
    alert('You should be studying!');
  }
} else if (ageYou >= 17 && ageYou < 25) {
  let university = confirm('Do you study at university?');
  if (university) {
    alert('Great, keep learning!');
  } else {
    alert('Education is important, consider going to university.');
  }
} else if (ageYou >= 25 && ageYou < 60) {
  let job = confirm('Do you have a job?');
  if (job) {
    alert('Good job, keep working hard!');
  } else {
    alert('Start looking for a job to support yourself!');
  }
} else {
  let other = prompt('What are you doing?');
  alert('Interesting, keep pursuing your goals!');
}

const displayAuthority = prompt('Enter the CSS value of display authority (block, flex, grid, inline):');
switch (displayAuthority) {
  case 'block':
    alert('You have entered display: block.');
    break;
  case 'flex':
    alert('You have entered display: flex.');
    break;
  case 'grid':
    alert("You have entered display: grid.");
    break;
  case 'inline':
    alert('You have entered display: inline.');
    break;
  case 'none':
    alert('You have entered display: none.');
    break;
    default:
    alert(`The value you entered is not valid. Setting 'display: inline-block;'`);
    break;
}
let inputNumber;
while (true) {
  inputNumber = prompt('Enter a numeric value:');
  if (!isNaN(Number(inputNumber))) {
    const result = Number(inputNumber) * 12;
    alert(`The result of ${inputNumber} * 12 is ${result}.`);
    break;
  } else {
    alert('The value you entered is not a valid number. Please enter a numeric value.');
  }
}
for(let i = 0; i < 50; i++) {
    console.log(i)
    if(i % 4 === 0) {
        console.log('Ділиться на 4')
        continue;
    }
}