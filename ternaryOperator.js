//now we using conditionals
let day= 3;
if (day===1){
  console.log("Monday")
}
else if (day===2){
  console.log("Tuesday")
}
else if (day===3){
  console.log(`Wednesday`)
}
else if(day===4){
  console.log(`Thursday`)
}

//when we using switch statement it's gonna look different, easier way

let month= 4
switch(month){
  case 1:
    console.log(`January`);
    break;
  case 2:
    console.log(`February`);
    break;
  case 3:
    console.log(`March`);
    break;
  case 4:
    console.log(`April`);
    break;
  case 5:
    console.log(`May`);
    break;
  default:
    consloe.log(`Invalid month!`);
}
//without break code would run in other months too

//now time to ternary operator
let num=7
if (num===7) {
  console.log('lucky luck');
}
else {
  console.log('no no no');
}

let TheBestOf= 'knowledge'
TheBestOf==='knowledge' ? console.log('you are the best') : console.log('you are stupid');

