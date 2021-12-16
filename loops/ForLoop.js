const numbers = [1,3,5,33,77,5];
let together=0
for(let a = 0 ; a<numbers.length ; a++)
{
  console.log(a, numbers[a])
}




const peopleScore= [
    {name : 'A',
    score : 60},
    {name : 'B',
    score : 44},
    {name : 'C',
    score : 5},
    {name : 'D',
    score : 120},
    {name : 'E',
    score : 7}
]


peopleScore


for(let e = 0 ; e < peopleScore.length ; e++) {
  let task = peopleScore[e]; //we creating placeholder, variable
    console.log(`${task.name} scored ${task.score}`)
}

let total = 0

for( let i = 0 ;  i < peopleScore.length ; i++){
 let person = peopleScore[i];
total += person.score;
console.log(total);
}
//adding score started from first object-  console.log(total) in loop


const newScore= [
    {name : 'A',
    score : 60},
    {name : 'B',
    score : 44},
    {name : 'C',
    score : 5},
    {name : 'D',
    score : 120},
    {name : 'E',
    score : 7}
]

let all = 0

for( let j = 0 ;  j < newScore.length ; j++){
let human = newScore[j];
  all += human.score;
}  
console.log(all/newScore.length);
//all score is counted and divided     console.log(all/newScore.length)    is outside


//last example - reversing string

const word = 'Potter'
for(let u = word.length-1 ; u >= 0 ; u--) {
  console.log(word[u])
};



const words = 'HarryPotter';
let reverse = "";
for(let q = words.length -1 ; q >= 0 ; q--) {
reverse += words[q];
  console.log(reverse)
}
