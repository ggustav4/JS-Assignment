//let inputnumer = 0
//function multiplybyself(nummbertomultiply) {
  //return nummbertomultiply * nummbertomultiply
//}
//console.log(multiplybyself(4))


//function average(numberone, numbertwo) {
  //return (numberone + numbertwo) /2;
//}
//console.log(average(2,6));


//function namn(firstName, secondName) {
  //return 'Welcome ' + firstName + secondName + '!';
//}
//console.log(namn('Ben', ' Ting'))

function getRandomNumber(min = 0, max = 2) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(0, 2));  // Output will be either 0, 1, or 2
