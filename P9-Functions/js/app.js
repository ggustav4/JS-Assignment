

//makelasagna()

//function makelasagna () { // en funktion
 // console.log("fry meat")
 // console.log(" cut onions")
  //console.log(" fry onions")
  //console.log(" add tomato sause")
  //console.log(" add spices")
  //console.log(" boil")

function stepforward() {
  console.log("move forward");
}

function turnright() {
  console.log("turn right");
}

function turnleft() {
  turnright()
  turnright()
  turnright()
}
function walkthreesteps() {
 stepforward()
 stepforward()
 stepforward()
}
function turnaround() {
  turnright()
  turnright()
}
walkthreesteps()
turnaround()
walkthreesteps()
turnleft()
walkthreesteps()
turnleft()
stepforward()
turnaround()
stepforward()
