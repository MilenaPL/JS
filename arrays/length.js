//nesting 
let password= "doggy dog";
if (password.length>=6) {
    if(password.indexOf(' ') ===-1){
        console.log("VALID PASSWORD");
    }
    else{
        console.log("INVALID PASSWORD, contain spaces");
    }   
}
else{
    console.log("Password too short");
}


//and &&
let pass="hellokitty";
if(pass.length>=6 && pass.indexOf (" ")===-1){
    console.log("Valid");
}
else{
    console.log("Unvalid");
}

let num = 82
if (num>1 && num <10){
  console.log("Great 1-10");
}
else{
  console.log("You fuck it");
}

//working on || and !

let color ="violet"
if (color==="purple" || color==="violet"){
  console.log("Great color!")
}

let mood= "awful"
if (!(mood==="bad")){
  console.log("shitty day xd   ")
}

