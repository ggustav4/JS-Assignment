//const birthYear = 2000;
//const currentyers = 2024
//let ageofperson = currentyers - birthYear;

//let isadult = ageofperson >= 18;
//let isachild = ageofperson <= 10 || ageofperson >= 0;
//let isteenager = ageofperson >= 11 ||ageofperson <=17;

//console.log(isadult);
//console.log(isachild);
//console.log(isteenager);

let playertouchground = true;

let playerhavejetpck = true;

if (playertouchground) {
  //när de är sant
  console.log("player is on the ground");
  console.log("player can jump");
}
else if (playerhavejetpck) { // körs när jetpack är = true
  console.log("player can jet away");
}
else {
  // när de är falskt && och har jetpack = false
  console.log("player is not on the ground");
  console.log("player cannot jump");
}
