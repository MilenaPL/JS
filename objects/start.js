const numbers= {
  100    :`one hundred`,
  16     : `sixteen`,
  '76 ducks' : `animals`
}
numbers
numbers[100]
numbers['76 ducks'] //remember using quotes in square brackets!!!

const score={
  my: 55,
  your: 22,
  his:99,
  her:1
}
score.his
score['his']

let Mystery = 'her'
score[Mystery] 
score.mystery //we don't have access cuz property not in this object

score.new=1000
score

score2=score
score2.new2=2000
score
score.my++;
score.my
score.his+200 // like that it doesn't change in object, it's temporary
score.her=2 //with equal score is changing in object

score 
score.his

//nested arrays and objects

const user = {
  name: 'Joseph',
  age: 22,
  skills: ['strenght', 'lazyness'],
  points: {
  red: 10,
  blue:15,
  green: 3
}
};

avgPoints=(user.points.red+user.points.blue+user.points.green)/3

if(avgPoints<=10){
  console.log( `You are like lazy cat!!!;p`)
}
if(user.skills.includes('lazyness')){
  console.log(`work harder dude`) //not working:(
}
if (user.age > 18) {
  console.log('You are not a teanager anymore')
}