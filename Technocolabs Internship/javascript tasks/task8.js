var userName="";
(userName=="")?console.log("Hello!"):console.log("Hello,"+userName+"!");
var userQuestion="What is the Magic Eight Ball?";
console.log("The question Asked by "+userName+"is "+userQuestion);
var randomvariable=Math.floor(Math.random() * 8);
var eightBall="";
switch(randomvariable)
{
	case 1:
	console.log("It is certain.");
	break;
	case 2:
	console.log("It is decidely so.");
	break;
	case 3:
	console.log("Reply hazy try again.");
	break;
	case 4:
	console.log("Cannot predict now.");
	break;
	case 5:
	console.log("Do not count on it.");
	break;
	case 6:
	console.log("My sources say no.");
	break;
	case 7:
	console.log("Outlook not so good.");
	break;
	case 8:
	console.log("Signs point to yes.");
	break;

}

