// function as argument

function takeAction() {
  console.log("I will eat cake.");
}

function takeAction2() {
  console.log("I will run today.");
}

function takeAction3() {
  console.log("It's time to open beer");
}

function choice(f1, f2, f3) {
  const random = Math.random();
  if (random <= 0.33) {
    return takeAction();
  } else if (random > 0.33 && random <= 0.66) {
    return takeAction2();
  } else {
    return takeAction3();
  }
}
choice();
choice();
choice();

//returning function - between

function between(x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
}

const isGoodYear = between(1900, 2022);
isGoodYear(1000); //false
isGoodYear(1900); //true

//returning function - multiply
function multiply(number) {
  return function (nr) {
    return nr * number;
  };
}

const res = multiply(5);
res(6);
