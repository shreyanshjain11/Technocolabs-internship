const getUserChoice=(userInput)=>{userInput = userInput.toLowerCase();
if((userInput=="rock")||(userInput=="paper")||(userInput=="scissors"||userInput=="bomb")){
	return userInput;
}
else{
	console.log("Error! Enter valid string.")
}}

const getComputerChoice=()=>{var x=Math.random()*3;
x=Math.floor(x);
if(x==0){
	return "rock";
}
else if(x==1){
	return "paper";
}
else{
	return "scissors";
}}
const determineWinner=(userChoice,computerChoice)=>{
	if (userChoice==computerChoice) {return "Game was a tie";}
	if(userChoice=="rock"){
		if(computerChoice=="paper"){
			return "Computer won";
		}
		else{
			return "User won";
		}
	}
	if(userChoice=="scissors"){
		if(computerChoice=="rock"){
			return "Computer won";
		}
		else{
			return "User won";
		}
	}
	if(userChoice=="paper"){
		if(computerChoice=="scissors"){
			return "Computer won";
		}
		else{
			return "User won";
		}
	}
	if(userChoice=="bomb"){
		return "User won";
	}

}
const playGame=()=>{userChoice=getUserChoice("scissors");
console.log("User's choice is- "+userChoice);
computerChoice=getComputerChoice();
console.log("Computer's choice is- "+computerChoice);
console.log(determineWinner(userChoice,computerChoice));
}
playGame();