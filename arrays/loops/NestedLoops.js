for (let k = 0 ; k < 5 ; k++) {
  console.log('OUTER' , k )
  for( let l= 4 ; l > -1 ; l--) {
    console.log('     INNER' , l )
  }
};



const gameBoard = [
  [6, 5, 86, 33],
  [33, 55, 4, 8],
  [22, 29, 11, 5],
  [55, 39, 62, 4],
];

totalScore = 0

for(let i = 0 ; i < gameBoard.length ; i++){
  let row = gameBoard[i];
   for (let j = 0 ; j < row.length ; j++) {
     totalScore += row[j]
   }
};





//multiplication table
for (let r = 0 ; r <= 10 ; r++) {
  for (let s = 0 ; s <= 10 ; s++) {
    console.log(`${r} * ${s} = ${r*s}`)
  }
console.log('------------')
}
