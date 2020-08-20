let raceNumber = Math.floor(Math.random() * 1000);
var early=true;
var age=18;
if((age>18)&&(early==true)){
	raceNumber=raceNumber+1000;
}
if(age>18){
	if(early==true){
		console.log("Your racing times is-9:30am and your Race Number is "+raceNumber);
	}
	else{
		console.log("Your racing times is-11:00am and your Race Number is "+raceNumber);
	}

}
else if(age<18){
		console.log("Your racing times is-12:30pm and your Race Number is "+raceNumber);
	}
else{
	console.log("See the registration desk.");
}