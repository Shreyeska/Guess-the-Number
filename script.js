let y= Math.floor (Math.random () * 11);

let guess = 1;

document.getElementById("guessSubmit").onclick = function() {
 
var x= document.getElementById("guessField").value;

if (guess <= 5){
if (x == y) {
    alert("Congratulations!! You have guess the number correctly in " + (5-guess) + " guesses");
}

else if(x > y){
    guess++;
    alert("You have guessed a higher number. Please guess a lower number."); 
}

else if(x < y){
    guess++;
    alert("You have guessed a smaller number. Please guess a higher number.");
}

}
else{
    alert("You ran out of guesses");
}
}

