
const favoritnumber = 13
const birthYear = 2010;
const currentYear = 2024;
let ageOfPerson = currentYear - birthYear;
console.log(ageOfPerson);


// Save to a let variable named isChild, when the age is from 0 till 10.
let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);

// Save to a let variable named isTeenager, when the age is from 11 to 17
let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);

// Save to a let variable named isAdult, when the age is 18 or more.
let isAdult =  ageOfPerson >= 18;

if  (isChild) {
  console.log( isChild =  "you are a child");
}

else if (isTeenager) {
  console.log( isTeenager =  "you are a teenager");
}

else if (isAdult){
  console.log("you are a adult ");
}

console.log(isChild);
console.log(isTeenager);
console.log(isAdult);
console.log(favoritnumber);

if (favoritnumber > ageOfPerson) {
  console.log("favoritnumer is grater");
}
else if (favoritnumber === ageOfPerson) {
  console.log("they are the same");
}
else {
  console.log("age is grater");
}

if (favoritnumber % 2 === 0) {
  console.log("even number");
}

else{
console.log("number is odd");
}
