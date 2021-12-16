const target = Math.floor(Math.random()*10);
let guess = Math.floor(Math.random()*10);
while(target !== guess) {
    console.log(`TARGET ${target} GUESS ${guess}`);
    console.log('Try again');
    guess = Math.floor(Math.random()*10);
}
console.log(`TARGET ${target} GUESS ${guess}`);
console.log('Great');



const arr = [];
let number = 0;
let max = 5;

while(number<max){
    arr.push(Math.floor(Math.random()*10));
    number++;
    console.log('the current size of array is ' + number)
}
console.log(arr)
