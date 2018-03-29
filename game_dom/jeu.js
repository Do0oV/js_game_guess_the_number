var nb = Math.floor(Math.random() * 101);
console.log(nb);	
var button = document.getElementById('send');
var addtext = document.getElementById('change');
var addred = document.getElementById('red');
		


button.addEventListener("click", function() 
{
	var userNumber = document.getElementById('champ').value;
	console.log(userNumber);
	if (userNumber == "") {
		addred.innerHTML = "Please enter a number";
	}
	else if (userNumber > nb) {
		addred.innerHTML = "Your guess was too high! Try again";
		document.getElementById('champ').style.backgroundColor = 'red';
	}else if (userNumber < nb) {
		addred.innerHTML = "Your guess was too low! Try again";
		document.getElementById('champ').style.backgroundColor = 'red';
	}else{
		addred.innerHTML = "";
		addtext.innerHTML = "BRAVO, you guessed the number!";
		document.getElementById('champ').style.backgroundColor = 'green';
	}
});






