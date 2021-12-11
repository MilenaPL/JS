let guestList= [
  `Kazio`,
  `Jadzia`,
  `Tolek`,
  `Robcio`,
  `Muniek`,
  ];
guestList[2]
//lenght not working
guestList.lenght
guestList[guestList.lenght-1]

//you can modifying arrays

guestList [2]= "Bogna"
guestList
guestList[guestList.lenght] = `Tobiasz`;
guestList
//but why is there undefined?
guestList[guestList.lenght] =`Iza`;
guestList

//push and pop -unshift and shift -arrays methods
let party=[
  `balloons`,
  `candles`,
  `cakes`,
  `champagne`
];
party.push(`songs`)
party
party.pop()
party.pop()
party
party.unshift(`flowers`)
party.unshift(`fruits`)
party
party.shift()
party

//more methods -concat

let third= [`bla`, `ble`, `blo`]
third
console.log(guestList.concat(party, third))

let everything= (guestList.concat(party, third))
everything

//
if (party.includes(`champagne`)){
  console.log(`don't drink too much!!;)`)
}
if (party.includes(`cakes`)){
  console.log(`you will be fat soon;D`)
}
if(guestList.indexOf(`Kazio`) !== -1){
  console.log(`Nice to see you!`)
}

party.indexOf(`fruits`)
party.indexOf(`flowers`)
guestList.indexOf(`Robcio`,4) //its checking after 4th place, NOT EXIST

guestList
guestList.reverse()

let whoKnows= [66, `winx`, null, 0, undefined, true]
whoKnows
whoKnows.join()
whoKnows.join(`**`)  //interesting:)

whoKnows.reverse().join(`^`)
whoKnows

party
party.reverse().join(`+`)
party  //why reverse is working when i write party and not showing + in join

let partyTop = party.slice(1,3);
partyTop

whoKnows
whoKnows.slice(2)
whoKnows.slice(2,5)
whoKnows.slice(-3,-1)
whoKnows.slice() //make copy

let count = [`one`, `two`, `three`,`four`, `five`, `six`, `seven`]
count.splice( 1, 2,'item1',`item2`);
count
count.splice(1, 0 , `teeeeen`)
count
count.splice(3,2,`NEW`)
count
count.sort()
whoKnows.sort()

//intro to reference types
let weeee =22
let us = 33
us
us=weeee
us
weeee=`new`
us //value doesn't change, it remember value

let nums=[11, 22, 33, 44]
let nums3= [111,222,333,444]
nums3
nums3=nums
nums3
nums=nums3
nums.push(`ttt`)
nums3

//const&arrays

const color= [`blue`,`red`, `green`]
color.push(`pink`)
color //we can change const arr as long as we not try to create a new one:)

//nested arrays
const game=[
  [`push`, `pull`[`lay`, `stand`]],
  [`help`, `kill`]
];
game[0][1].unshift(`Hello Kitty`); //not working:(
game[2][1]=`wit`
game

