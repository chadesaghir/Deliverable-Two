function myNameFunction() {

    var startPrintGame = "YES";
    var userPrnName = "";
    var printAgain = "YES"
    var eC = "!"

    startPrintGame = prompt("Would you like to print your name- Yes or No").toUpperCase();
    {
        userPrnName = prompt("Enter your name");
    }
    document.write("Hello. My name is " + userPrnName);
    printAgain = prompt("Would you like to print this again- Yes or No").toUpperCase();


    while (printAgain === "YES") {
        printAgain = prompt("Would you like to print this again- Yes or No").toUpperCase();
        document.write(eC)
		
		
    }
console.log (userPrnName + eC)
}


