
const textField0 = document.getElementById("text0");
textField0.innerHTML ="klicka";

const buttonnumber0 = document.getElementById("button0");
buttonnumber0.innerHTML ="klicka mig";
buttonnumber0.style.color = "blue";

let score = 0;

buttonnumber0.addEventListener("click", () => {
  increaseScore(1);
  updateScore();
});

function increaseScore() {
  score++;
}

function updateScore() {
  textField0.innerHTML = score;
}
{






//const textfield0 = document.getElementById("text0");/

//textfield0.innerHTML = "gustav"

//const headertext5 = document.getElementById("header5");

//headertext5.innerHTML = "sjuk är jag";

//headertext5.style.color = "yellow"

//const button0 = document.getElementById("knapp");
//let score = 0
//function increaseBy(inputnumber){
  //button0.addEventListener("click", () => {return score++();});

}
//button







//const buttunummer = document.getElementById("button0");
//buttunummer.addEventListener("click", () => {1})
//buttunummer.innerHTML = "klicka mig"
//buttunummer.style.color = "red"
