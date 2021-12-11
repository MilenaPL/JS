// the switch statement
let day=9
switch (day){
  case 1:
  case 7:
  case 14:
  case 21:
  case 28:
  console.log("Monday");
      break;
  case 2:
  case 9:
  case 15:
  case 22:
  case 29:
      console.log('Tuesday');
  break
    default:
      console.log('Not valid day')
}

let emoji = 'angry'
switch (emoji){
  case 'smile':
  case 'tounge':
    console.log('yellow');
    break;
  case 'angry':
  case 'confused':
    console.log('red')
}

//ternary operator

let num= 7
num===7 ? console.log ('happy number!') : console.log('try again');

let status = 'offline'
status==='online' ? console.log('green') : console.log('red');

let season = 'winter';
let activity= season==='winter' ? 'skiing' : 'nordic walking';
console.log(activity);
