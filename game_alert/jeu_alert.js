
var nb = Math.floor(Math.random() * 101); // generate a random number / the floor remove the decimal
console.log(nb); // delete this

var userNumber = prompt("Guess a number between 0 and 100:", ""); // storing the user number
//console.log(userNumber); // delete this

// while userNumber is different from nb and the user did not click cancel
while(userNumber != nb && userNumber != null) { 

	if (userNumber > nb && userNumber != "") {
		userNumber = prompt("Your guess was too high! Try again:","" );
	}else if (userNumber < nb && userNumber != "" ) {
		userNumber = prompt("Your guess was too low! Try again:", "");
	}else if (userNumber == "") {
		userNumber = prompt("Please enter a number:","" );
	}
}

if (userNumber == null) {
	alert("Bye");
	
}else {
	alert("BRAVO, you guessed the number! It was indeed " + nb + " !");
}
